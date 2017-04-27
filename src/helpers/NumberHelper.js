const SI_POSTFIXES = ["", "k", "M", "B", "T", "P", "E"];

const NumberHelper = {

  humanize: (number) => {
    return number.toLocaleString()
  },

  abbr: (number) => {
    let tier = Math.log10(Math.abs(number)) / 3 | 0;

    if (tier == 0) return number;

    let postfix = SI_POSTFIXES[tier];
    let scale = Math.pow(10, tier * 3);

    let scaled = number / scale;

    let formatted = scaled.toFixed(2) + '';

    // remove '.0' case
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2);

    return formatted + postfix;
  },

  per: (number) => {
    return `${number} %`
  }
}

export default NumberHelper

