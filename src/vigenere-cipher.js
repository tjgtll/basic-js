const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  checkArguments(text, key) {
    return text !== undefined && key !== undefined;
  }

  validateInput(text, key) {
    if (
      typeof text !== "string" ||
      typeof key !== "string" ||
      text.length === 0 ||
      key.length === 0
    ) {
      throw new Error("Incorrect arguments!");
    }
  }

  prepareKey(text, key) {
    let newKey = "";
    let keyCharIndex = 0;

    for (let counter = 0; counter < text.length; counter += 1) {
      if (this.alphabet.indexOf(text[counter]) === -1) {
        newKey += " ";
      } else {
        newKey += key[keyCharIndex % key.length];
        keyCharIndex += 1;
      }
    }

    return newKey.toUpperCase();
  }

  transformText(text, key, operation) {
    this.validateInput(text, key);
    text = text.toUpperCase();

    const newKey = this.prepareKey(text, key);
    const transformedText = [];

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];

      if (this.alphabet.indexOf(char) === -1) {
        transformedText.push(char);
        continue;
      }

      const resultCharIndex = operation(
        this.alphabet.indexOf(char),
        this.alphabet.indexOf(newKey[i])
      );

      transformedText.push(this.alphabet[resultCharIndex]);
    }

    return this.type
      ? transformedText.join("")
      : transformedText.reverse().join("");
  }

  encrypt(text, key) {
    if (!this.checkArguments(text, key)) {
      throw new Error("Incorrect arguments!");
    }

    const encryptOperation = (charIndex, keyIndex) =>
      (charIndex + keyIndex) % 26;
    return this.transformText(text, key, encryptOperation);
  }

  decrypt(text, key) {
    if (!this.checkArguments(text, key)) {
      throw new Error("Incorrect arguments!");
    }

    const decryptOperation = (charIndex, keyIndex) =>
      (26 + charIndex - keyIndex) % 26;
    return this.transformText(text, key, decryptOperation);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
