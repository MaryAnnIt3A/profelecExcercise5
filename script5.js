// Encryption
let originalText = prompt("Enter text to encrypt").toUpperCase();
let encryptedText = '';

const decipherText = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const cipherText = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'];

for (let i = 0; i < originalText.length; i++) {
  let char = originalText[i];
  let index = decipherText.indexOf(char);
  if (index !== -1) {
    encryptedText += cipherText[index];
  } else {
    encryptedText += char; 
  }
}

console.log("Encrypted Text:", encryptedText);

// Decryption
let toDecrypt = prompt("Enter text to decrypt");

let decryptedText = '';

for (let i = 0; i < toDecrypt.length; i++) {
  let char = toDecrypt[i].toUpperCase();
  let index = cipherText.indexOf(char);
  if (index !== -1) {
    decryptedText += decipherText[index];
  } else {
    decryptedText += char; 
  }
}

console.log("Decrypted Text:", decryptedText);
