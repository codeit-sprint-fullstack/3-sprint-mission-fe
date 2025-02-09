const FormatCurrency = (value: number) => {
  return new Intl.NumberFormat("ko-KR").format(value);
}


export default FormatCurrency;