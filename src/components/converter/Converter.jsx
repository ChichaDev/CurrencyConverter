import ConvertBlock from "./ConvertBlock";

import useFetch from "../../utils/hooks/UseFetch";
import { API_URL } from "../../config/api";
import { useConverter } from "../../entity/converter/useConverter";
import { FROM_CURRENCY_DEFAULT, TO_CURRENCY_DEFAULT } from '../../config/currency';
import { uahCurrenciesAdapter } from '../../utils/adapters/uahCurrenciesAdapter';

function Converter() {
  const { data, isLoading, error } = useFetch(API_URL, uahCurrenciesAdapter);

  const {
    setFromCurrency,
    setToCurrency,
    fromPrice,
    toPrice,
    onChangeFromPrice,
    onChangeToPrice,
    fromCurrency,
    toCurrency
  } = useConverter({
    currencies: data,
    defaultFromCurrency: FROM_CURRENCY_DEFAULT,
    defaultToCurrency: TO_CURRENCY_DEFAULT
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>error occured</p>;
  }
  
  return (
    <div className="App">
      <ConvertBlock
        currencies={fromCurrency}
        data={data}
        value={fromPrice}
        setCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <ConvertBlock
        currencies={toCurrency}
        data={data}
        value={toPrice}
        setCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export { Converter };
