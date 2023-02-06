export function convert({
  direction,
  value,
  fromCurrency,
  toCurrency,
  currencies,
}) {
  const from = currencies.find((el) => el.currency === fromCurrency);
  const to = currencies.find((el) => el.currency === toCurrency);
  if (direction === "fromto") {
    return ((value / to.saleRateNB) * from.saleRateNB).toFixed(2);
  }
  return ((value / from.saleRateNB) * to.saleRateNB).toFixed(2);
}
