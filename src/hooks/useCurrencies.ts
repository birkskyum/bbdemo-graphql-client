import { gql, useQuery } from '@apollo/client'

export function useCurrencies() {

  const CURRENCIES = gql`
    query getCurrencies {
      currencies {
        name,
        namePlural, 
        code, 
        symbolNative,
        decimalDigits,
      }
    }
  `

  return useQuery(CURRENCIES)
}
