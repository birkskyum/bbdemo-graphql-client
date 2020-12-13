import React from 'react';
import { useCurrencies } from '../hooks/useCurrencies';
import { useLocale } from '../hooks/useLocale';

export const GlobalContext = React.createContext({});

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
