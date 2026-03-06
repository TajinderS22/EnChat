export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export const generateRSAKeys = async () => {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  );

  const publicKey = await crypto.subtle.exportKey("spki", keyPair.publicKey);
  const privateKey = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

  

  return {
    publicKey: arrayBufferToBase64(publicKey),
    privateKey: arrayBufferToBase64(privateKey),
  };
};

const importPublicKey = async (base64PublicKey: string) => {
  const publicKeyBuffer = base64ToArrayBuffer(base64PublicKey);

  const pubKey= await crypto.subtle.importKey(
    "spki",
    publicKeyBuffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"] 
  );
  return pubKey
};

function stringToArrayBuffer(str: string): ArrayBuffer {
  const encoder = new TextEncoder();
  return encoder.encode(str).buffer;
}

const importPrivateKey = async (base64PrivateKey: string) => {
  const privateKeyBuffer =  base64ToArrayBuffer(base64PrivateKey);

  const privatekey= await crypto.subtle.importKey(
    "pkcs8", 
    privateKeyBuffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["decrypt"] 
  );
  return privatekey;
};

export const encryptMessage = async (message: string, base64PublicKey: string): Promise<string> => {
  const publicKey = await importPublicKey(base64PublicKey);
  const encoder = new TextEncoder();
  const data = encoder.encode(message); 

  const encrypted = await crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    data
  );

  return arrayBufferToBase64(encrypted);
};

export const decryptMessage = async (encryptedMessageBase64: string, base64PrivateKey: string): Promise<string> => {
  const privateKey = await importPrivateKey(base64PrivateKey);
  const encryptedMessage = base64ToArrayBuffer(encryptedMessageBase64); 

  const decrypted = await crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    encryptedMessage
  );

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
};

export async function deriveAesKeyFromPassword(
  password: string,
  saltBase64: string,
  iterations = 100000
): Promise<CryptoKey> {
  
  const enc = new TextEncoder();

  const passwordBuffer = enc.encode(password);
  const saltBuffer = base64ToArrayBuffer(saltBase64);

  const pwKey = await crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  
  const aesKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: iterations,
      hash: "SHA-256",
    },
    pwKey,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );

  return aesKey;
}


// Add this function to your code
export function generateSaltBase64(): string {
  const saltBuffer = crypto.getRandomValues(new Uint8Array(16));
  return arrayBufferToBase64(saltBuffer.buffer);
}

// When user signs up (in your onSubmit)
const newSalt = generateSaltBase64();


export async function decryptMessageWithPrivateKey(
  encryptedBase64: string,
  privateKey: CryptoKey
): Promise<string> {
  const encryptedBuf = base64ToArrayBuffer(encryptedBase64);
  const decryptedBuf = await crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    encryptedBuf
  );
  const decoded = new TextDecoder().decode(decryptedBuf);
  return decoded;
}

export async function encryptPrivateKeyWithPassword(
  privateKeyString: string, 
  password: string,
  salt: string          
): Promise<{ ivString: string ,encryptedPrivateKeyBase64:string }> {

  
  const aesKey = await deriveAesKeyFromPassword(password, salt);
  const privateKeyBuffer = base64ToArrayBuffer(privateKeyString);
  
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ivString = arrayBufferToBase64(iv.buffer)

  const encryptedPrivateKey = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,   
    },
    aesKey,
    privateKeyBuffer 
  );

  const encryptedPrivateKeyBase64 = arrayBufferToBase64(encryptedPrivateKey)

  return {  ivString , encryptedPrivateKeyBase64};   
}

export async function decryptPrivateKeyWithPassword(
  encryptedPrivateKey:string, 
  iv :string,                 
  password :string,
  salt :string                 
) {
  const ivBuffer = base64ToArrayBuffer(iv);
  const encryptedPrivateKeyBuffer = base64ToArrayBuffer(encryptedPrivateKey);
  const aesKey = await deriveAesKeyFromPassword(password, salt);

  try {
    const decryptedPrivateKeyBuffer = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: ivBuffer,
      },
      aesKey,
      encryptedPrivateKeyBuffer
    );

    const pkString = arrayBufferToBase64(decryptedPrivateKeyBuffer);
    return pkString;
  } catch (err) {
    console.error(" Decryption failed:", err);
    throw new Error("Invalid password or corrupted data");
  }
}