// import {ENCRYPTION_PASSWORD} from '../' 
export const generateRSAKeys = async () => {
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  )
  

  const publicKey = await window.crypto.subtle.exportKey("spki", keyPair.publicKey)
  const privateKey = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey)

  return {
    publicKey: btoa(String.fromCharCode(...new Uint8Array(publicKey))),
    privateKey: btoa(String.fromCharCode(...new Uint8Array(privateKey))),
  }
}




async function importPublicKey(base64:any) {
  const bin = Uint8Array.from(atob(base64), c => c.charCodeAt(0))
  return crypto.subtle.importKey("spki", bin.buffer, { name: "RSA-OAEP", hash: "SHA-256" }, false, ["encrypt"])
}

export async function importPrivateKey(base64:any) {
  const bin = Uint8Array.from(atob(base64), c => c.charCodeAt(0))
  return crypto.subtle.importKey("pkcs8", bin.buffer, { name: "RSA-OAEP", hash: "SHA-256" }, false, ["decrypt"])
}

export async function encryptAESKey(aesKeyString:string, recipientPublicKeyBase64:any) {
  const publicKey = await importPublicKey(recipientPublicKeyBase64)
  const data = new TextEncoder().encode(aesKeyString)
  const encrypted = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, data)
  return btoa(String.fromCharCode(...new Uint8Array(encrypted)))
}

export async function decryptAESKey(encryptedBase64:any, privateKeyBase64:any) {
  const privateKey = await importPrivateKey(privateKeyBase64)
  const bin = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0))
  const decrypted = await crypto.subtle.decrypt({ name: "RSA-OAEP" }, privateKey, bin.buffer)
  return new TextDecoder().decode(decrypted)
}


export const generateAESKey = async (chatroomId: number, userIds: any[]) => {
  const uniqueSecret = `${'normaltext'}@${chatroomId}!${userIds.sort().join(',')}`
  const encoder = new TextEncoder()
  const salt = await window.crypto.subtle.digest("SHA-256", encoder.encode(uniqueSecret))

  const baseKey = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(uniqueSecret),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  )

  const aesKey = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 10000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  )

  return aesKey
}

export const encryptMessage = async (message: string, aesKey: CryptoKey) => {
  const iv = window.crypto.getRandomValues(new Uint8Array(12))
  const encoded = new TextEncoder().encode(message)
  const ciphertext = await window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, aesKey, encoded)
  return {
    content: btoa(String.fromCharCode(...new Uint8Array(ciphertext))),
    iv: btoa(String.fromCharCode(...iv)),
  }
}

export const decryptMessage = async (
  encrypted: { content: string; iv: string },
  aesKey: CryptoKey
) => {
  const data = Uint8Array.from(atob(encrypted.content), c => c.charCodeAt(0))
  const iv = Uint8Array.from(atob(encrypted.iv), c => c.charCodeAt(0))
  const decrypted = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, aesKey, data)
  return new TextDecoder().decode(decrypted)
}

export async function cryptoKeyToString(key:CryptoKey) {
  console.log(key)
  const raw = await crypto.subtle.exportKey("raw", key)
  return btoa(String.fromCharCode(...new Uint8Array(raw)))
}

export async function base64ToCryptoKey(base64:any) {
  const bin = Uint8Array.from(atob(base64), c => c.charCodeAt(0))
  return crypto.subtle.importKey("raw", bin.buffer, { name: "AES-GCM" }, true, ["encrypt", "decrypt"])
}
