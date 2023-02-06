import { useState } from "react";
import { convert } from "./converter.service";

export function useConverter({
  currencies,
  defaultFromCurrency,
  defaultToCurrency,
}) {
  const [fromCurrency, setFromCurrency] = useState(defaultFromCurrency);
  const [toCurrency, setToCurrency] = useState(defaultToCurrency);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const onChangeFromPrice = (value) => {
    setToPrice(
      convert({
        direction: "fromto",
        value,
        fromCurrency,
        toCurrency,
        currencies,
      })
    );
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    setFromPrice(
      convert({
        direction: "tofrom",
        value,
        fromCurrency,
        toCurrency,
        currencies,
      })
    );
    setToPrice(value);
  };

  return {
    setFromCurrency,
    setToCurrency,
    fromPrice,
    toPrice,
    onChangeFromPrice,
    onChangeToPrice,
    fromCurrency,
    toCurrency,
  };
}
