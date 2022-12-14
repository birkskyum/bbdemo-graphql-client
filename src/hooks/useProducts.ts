import { gql, useQuery } from '@apollo/client'

export interface IProduct {
  id: string,
  name: string,
  priceUSD: number,
  photos: string[]
}

export function useProducts() {

  const PRODUCTS = gql`
    query getProducts {
      products {
        id, 
        name, 
        priceUSD, 
        photos
      }
    }
  `
  
  return useQuery(PRODUCTS)
}

// export function useProduct(id) {

//   const PRODUCT = gql`
//     query getProduct(id) {
//       id, 
//       name, 
//       priceUSD, 
//       photos
//     }
//   `
  
//   return useQuery(PRODUCT)
// }