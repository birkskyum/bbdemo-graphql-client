import { useState } from "react";
// import { currencyReducer } from '../reducers/currencyReducer'

export const getCurrencyFromCode = (currencyCode: string, currencies: any[]) => {
  return currencies.find((c)=>{return c.code.toUpperCase() === currencyCode.toUpperCase()})
}

export function useCurrency(currencyCode, currencies) {

  const [currency, setCurrency ] = useState(getCurrencyFromCode(currencyCode, currencies))

  function setCurrencyByCode(currencyCode) {
    setCurrency(getCurrencyFromCode(currencyCode, currencies))
  }

  return {
    currency, setCurrencyByCode
  }
}