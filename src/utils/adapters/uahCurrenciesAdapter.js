export function uahCurrenciesAdapter(data) {
    return {
        data: [...data.exchangeRate, {
          baseCurrency: 'UAH',
          currency:"UAH",
          saleRateNB:1,
          purchaseRateNB:1,
          saleRate:1,
          purchaseRate:1
        }],
        isLoading: false,
        error: false,
    }
}