import { useState } from "react";
// import { currencyReducer } from '../reducers/currencyReducer'

export interface ICurrency {
  name: string,
  symbol: string,
  symbolNative: string,
  decimalDigits: number,
  rounding: number,
  code: string,
  namePlural: string,
  countries: string[],
  exchangeRateFromUSD?: number,
}

export const getCurrencyFromCode = (currencyCode: string, currencies: ICurrency[]) => {
  const currency = currencies.find((c)=>{return c.code.toUpperCase() === currencyCode.toUpperCase()})
  
  if (currency) {
    return currency
  } else {
    console.warn("currency not found")
    return currencies[0]
  }
   
}

export function useCurrency(currencyCode: string, currencies: ICurrency[]) {

  const [currency, setCurrency ] = useState(getCurrencyFromCode(currencyCode, currencies))

  function setCurrencyByCode(currencyCode: string) {
    setCurrency(getCurrencyFromCode(currencyCode, currencies))
  }

  return {
    currency, setCurrencyByCode
  }
}