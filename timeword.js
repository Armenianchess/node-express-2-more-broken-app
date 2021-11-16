const HOURS = [
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven"
];

const ONES = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

const TENS = ["", "", "twenty", "thirty", "forty", "fifty"];

function timeWord(time) {
  if (time === "00:00") return "midnight";

  if (time === "12:00") return "noon";

  let [hours, minutes] = time.split(":");
  hours = +hours;
  minutes = +minutes;

  let out = HOURS[hours % 12] + " ";

  if (minutes >= 20) {
    out += TENS[Math.floor(minutes / 10)] + " " + ONES[minutes % 10];
  } else if (minutes >= 10) {
    out += ONES[minutes];
  } else if (minutes > 0) {
    out += "oh " + ONES[minutes];
  } else {
    out += "o'clock";
  }

  let amOrPm = hours >= 12 ? " pm" : " am"
  return out.trim() + amOrPm;
}

module.exports = timeWord;
