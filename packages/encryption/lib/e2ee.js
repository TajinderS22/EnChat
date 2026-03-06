"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptMessage = exports.encryptMessage = exports.generateRSAKeys = void 0;
exports.arrayBufferToBase64 = arrayBufferToBase64;
exports.base64ToArrayBuffer = base64ToArrayBuffer;
exports.deriveAesKeyFromPassword = deriveAesKeyFromPassword;
exports.generateSaltBase64 = generateSaltBase64;
exports.decryptMessageWithPrivateKey = decryptMessageWithPrivateKey;
exports.encryptPrivateKeyWithPassword = encryptPrivateKeyWithPassword;
exports.decryptPrivateKeyWithPassword = decryptPrivateKeyWithPassword;
function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
const generateRSAKeys = () => __awaiter(void 0, void 0, void 0, function* () {
    const keyPair = yield crypto.subtle.generateKey({
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
    }, true, ["encrypt", "decrypt"]);
    const publicKey = yield crypto.subtle.exportKey("spki", keyPair.publicKey);
    const privateKey = yield crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
    return {
        publicKey: arrayBufferToBase64(publicKey),
        privateKey: arrayBufferToBase64(privateKey),
    };
});
exports.generateRSAKeys = generateRSAKeys;
const importPublicKey = (base64PublicKey) => __awaiter(void 0, void 0, void 0, function* () {
    const publicKeyBuffer = base64ToArrayBuffer(base64PublicKey);
    const pubKey = yield crypto.subtle.importKey("spki", publicKeyBuffer, {
        name: "RSA-OAEP",
        hash: "SHA-256",
    }, true, ["encrypt"]);
    return pubKey;
});
function stringToArrayBuffer(str) {
    const encoder = new TextEncoder();
    return encoder.encode(str).buffer;
}
const importPrivateKey = (base64PrivateKey) => __awaiter(void 0, void 0, void 0, function* () {
    const privateKeyBuffer = base64ToArrayBuffer(base64PrivateKey);
    const privatekey = yield crypto.subtle.importKey("pkcs8", privateKeyBuffer, {
        name: "RSA-OAEP",
        hash: "SHA-256",
    }, true, ["decrypt"]);
    return privatekey;
});
const encryptMessage = (message, base64PublicKey) => __awaiter(void 0, void 0, void 0, function* () {
    const publicKey = yield importPublicKey(base64PublicKey);
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const encrypted = yield crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, data);
    return arrayBufferToBase64(encrypted);
});
exports.encryptMessage = encryptMessage;
const decryptMessage = (encryptedMessageBase64, base64PrivateKey) => __awaiter(void 0, void 0, void 0, function* () {
    const privateKey = yield importPrivateKey(base64PrivateKey);
    const encryptedMessage = base64ToArrayBuffer(encryptedMessageBase64);
    const decrypted = yield crypto.subtle.decrypt({ name: "RSA-OAEP" }, privateKey, encryptedMessage);
    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
});
exports.decryptMessage = decryptMessage;
function deriveAesKeyFromPassword(password_1, saltBase64_1) {
    return __awaiter(this, arguments, void 0, function* (password, saltBase64, iterations = 100000) {
        const enc = new TextEncoder();
        const passwordBuffer = enc.encode(password);
        const saltBuffer = base64ToArrayBuffer(saltBase64);
        const pwKey = yield crypto.subtle.importKey("raw", passwordBuffer, "PBKDF2", false, ["deriveKey"]);
        const aesKey = yield crypto.subtle.deriveKey({
            name: "PBKDF2",
            salt: saltBuffer,
            iterations: iterations,
            hash: "SHA-256",
        }, pwKey, { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
        return aesKey;
    });
}
// Add this function to your code
function generateSaltBase64() {
    const saltBuffer = crypto.getRandomValues(new Uint8Array(16));
    return arrayBufferToBase64(saltBuffer.buffer);
}
// When user signs up (in your onSubmit)
const newSalt = generateSaltBase64();
function decryptMessageWithPrivateKey(encryptedBase64, privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const encryptedBuf = base64ToArrayBuffer(encryptedBase64);
        const decryptedBuf = yield crypto.subtle.decrypt({ name: "RSA-OAEP" }, privateKey, encryptedBuf);
        const decoded = new TextDecoder().decode(decryptedBuf);
        return decoded;
    });
}
function encryptPrivateKeyWithPassword(privateKeyString, password, salt) {
    return __awaiter(this, void 0, void 0, function* () {
        const aesKey = yield deriveAesKeyFromPassword(password, salt);
        const privateKeyBuffer = base64ToArrayBuffer(privateKeyString);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const ivString = arrayBufferToBase64(iv.buffer);
        const encryptedPrivateKey = yield crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: iv,
        }, aesKey, privateKeyBuffer);
        const encryptedPrivateKeyBase64 = arrayBufferToBase64(encryptedPrivateKey);
        return { ivString, encryptedPrivateKeyBase64 };
    });
}
function decryptPrivateKeyWithPassword(encryptedPrivateKey, iv, password, salt) {
    return __awaiter(this, void 0, void 0, function* () {
        const ivBuffer = base64ToArrayBuffer(iv);
        const encryptedPrivateKeyBuffer = base64ToArrayBuffer(encryptedPrivateKey);
        const aesKey = yield deriveAesKeyFromPassword(password, salt);
        try {
            const decryptedPrivateKeyBuffer = yield crypto.subtle.decrypt({
                name: "AES-GCM",
                iv: ivBuffer,
            }, aesKey, encryptedPrivateKeyBuffer);
            const pkString = arrayBufferToBase64(decryptedPrivateKeyBuffer);
            return pkString;
        }
        catch (err) {
            console.error(" Decryption failed:", err);
            throw new Error("Invalid password or corrupted data");
        }
    });
}
