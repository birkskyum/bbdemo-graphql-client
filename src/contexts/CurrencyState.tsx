import React, { useContext } from 'react';
import {GlobalContext, IGlobalContext} from './GlobalState'
import {useCurrency} from '../hooks/useCurrency'
import { useExchangeRate } from '../hooks/useExchangeRate';
import { ICurrency } from '../testing-data/currencies';

export const CurrencyContext = React.createContext({});

export interface ICurrencyContext {
  currency: {
    loading: boolean,
    currency: ICurrency,
    setCurrencyByCode(any)
  },
  exchangeRate: {
    loading: boolean,
    data: {
      exchangeFromOneUSD: number
    }
  }
}

export const CurrencyProvider = ({ children }) => {
  
  const context = useContext(GlobalContext) as IGlobalContext
  
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
