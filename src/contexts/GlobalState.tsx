import React from 'react';
import { useCurrencies } from '../hooks/useCurrencies';
import { ILocale, useLocale } from '../hooks/useLocale';
import {ICurrency} from '../hooks/useCurrency'
export const GlobalContext = React.createContext({});

export interface IGlobalContext {
  locale: {
    locale: {
      data: ILocale
  },
    loading: boolean
  },
  currencies: {
    data: {
      currencies: ICurrency[]
    },
    loading: boolean
  }
}

export const GlobalProvider = ({ children }) => {
  
  const locale = useLocale()
  const currencies = useCurrencies()

  const provider = {
    locale,
    currencies,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
