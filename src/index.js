const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  pr: " ",
};

function decode(expr) {
  // write your solution her
  let a = [];
  let b = [];
  let l = [];
  let c = expr.length / 10;
  for (let i = 0; i < c; i++) {
    a.push(expr.slice(i * 10, i * 10 + 10));
  }
  a.forEach(function (i) {
    l = [];
    if (i == "**********") {
      b.push("pr");
    }
    for (let j = 0; j < 5; j++) {
      if (i.slice(j * 2, j * 2 + 2) == "10") {
        l.push(".");
      } else if (i.slice(j * 2, j * 2 + 2) == "11") {
        l.push("-");
      }
    }
    b.push(l.join(""));
  });
  let decod = b.map((a) => MORSE_TABLE[a]);
  return decod.join("");
}

module.exports = {
  decode,
};
