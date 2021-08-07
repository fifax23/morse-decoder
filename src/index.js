const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const LETTER_LENGTH = 10;

function decode(expr) {
  let arrayOfExpr = expr.match(/.{1,2}/g);
  let finalWord = '';

  while (arrayOfExpr.length) {
    let res = [];
    let encodedLetter = arrayOfExpr.splice(0, LETTER_LENGTH / 2);
    encodedLetter.forEach((code) => {
      if (code == 10 || code == 11 || code == '**') {
        res.push(code);
      }
    });
    if (res.length > 0) {
      res = res.join('').replace(/10/g, '.').replace(/11/g, '-');
      if (res === '**********') {
        res = ' ';
      }
      if (res === ' ') {
        finalWord += res;
      } else {
        finalWord += MORSE_TABLE[res];
      }
    }
  }

  return finalWord;
}

module.exports = {
  decode,
};
