const formatter = {
  formatNumber(number) {
    const numberToFormat = +number;
    if (typeof numberToFormat !== "number") return number;
    return numberToFormat.toLocaleString();
  },
};

export default formatter;
