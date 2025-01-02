const FormatCurrency = (value) => {
  return new Intl.NumberFormat("ko-KR").format(value);
}


export default FormatCurrency;