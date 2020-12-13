
import {Spin} from 'antd'
import 'antd/dist/antd.css';
import {useContext} from 'react'
import { GlobalContext } from './contexts/GlobalState';
import { CurrencyProvider } from './contexts/CurrencyState';
import { ProductsList } from './components/ProductsList'
import { useProducts } from './hooks/useProducts'
import { CurrencySelector } from './components/CurrencySelector';
import styled from 'styled-components'

const SpinnerWrapper = styled(Spin)`
  text-align: center;
  margin-top: 100px;
`

export function Main () {

  const context: any = useContext(GlobalContext)
  const products = useProducts()

  if (context.locale.loading || context.currencies.loading || products.loading) {
    return <SpinnerWrapper><Spin /></SpinnerWrapper>
  } else {
    return (
      <CurrencyProvider>
        <CurrencySelector />
        <ProductsList products={products.data.products} />
      </CurrencyProvider>
    )
  }
}