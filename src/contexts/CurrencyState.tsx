import React, { useContext } from 'react';
import {GlobalContext} from './GlobalState'
import {useCurrency} from '../hooks/useCurrency'
import { useExchangeRate } from '../hooks/useExchangeRate';

export const CurrencyContext = React.createContext({});

export const CurrencyProvider = ({ children }) => {
  
  const context:any = useContext(GlobalContext)
  
  const currency = useCurrency(context.locale.locale.data.currency, context.currencies.data.currencies)
  const exchangeRate = useExchangeRate(currency.currency.code)

  const provider = {
    currency,
    exchangeRate
  };

  return (
    <CurrencyContext.Provider value={provider}>{children}</CurrencyContext.Provider>
  );
};
