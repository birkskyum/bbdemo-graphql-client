import { useQuery, gql } from '@apollo/client'

export function useExchangeRate(currencyCode) {
    const EXCHANGE_RATE = gql`
    query getExchangeRate($currencyCode: String!) {
      exchangeFromOneUSD(currencyCode:$currencyCode)
    }
  `
    const {loading, data, error} = useQuery(EXCHANGE_RATE, {
      variables: {
        currencyCode:currencyCode
      },
      fetchPolicy: "network-only"
    })

    return {loading, data, error}
}