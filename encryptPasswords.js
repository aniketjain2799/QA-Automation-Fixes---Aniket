const CryptoJS = require("crypto-js");

const secretKey = "";
const encryptedPassword = "";
const decryptedPassword = CryptoJS.AES.decrypt(
  encryptedPassword,
  secretKey
).toString(CryptoJS.enc.Utf8);

console.log("Decrypted Password:", decryptedPassword);

const secretKey1 = "";
const password1 = "";

const encryptedPassword1 = CryptoJS.AES.encrypt(password1, secretKey1).toString();
console.log("Encrypted Password:", encryptedPassword1);
