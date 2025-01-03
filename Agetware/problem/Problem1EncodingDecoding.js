function caesarCipherEncode(message, shift) {
    return message
        .split('')
        .map(char => {
            if (char.match(/[a-z]/)) {
                return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            } else if (char.match(/[A-Z]/)) {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
            } else {
                return char;
            }
        })
        .join('');
}
function caesarCipherDecode(message, shift) {
    return caesarCipherEncode(message, 26 - (shift % 26));
}

const originalMessage = "Caesar Cipher";
const shift = 3;
const encodedMessage = caesarCipherEncode(originalMessage, shift);
console.log("Encoded Message:", encodedMessage);
const decodedMessage = caesarCipherDecode(encodedMessage, shift);
console.log("Decoded Message:", decodedMessage);
