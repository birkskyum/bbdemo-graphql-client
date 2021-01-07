
import {Spin} from 'antd'
import 'antd/dist/antd.css';
import {useContext} from 'react'
import { GlobalContext, IGlobalContext } from './contexts/GlobalState';
import { CurrencyProvider } from './contexts/CurrencyState';
import { ProductListPage } from './pages/ProductListPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { useProducts } from './hooks/useProducts'
import { CurrencySelector } from './components/CurrencySelector';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import { AddProductForm as AddProduct } from './pages/AddProductPage';

const SpinnerWrapper = styled(Spin)`
  text-align: center;
  margin-top: 100px;
`

export function Main () {

  const context = useContext(GlobalContext) as IGlobalContext
  const products = useProducts()

  if (context.locale.loading || context.currencies.loading || products.loading) {
    return <SpinnerWrapper><Spin /></SpinnerWrapper>
  } else {
    return (
      <CurrencyProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <CurrencySelector />
              <ProductListPage products={products.data.products} />
            </Route>
            <Route path="/product/:id">
              <ProductDetailsPage />
            </Route>
            <Route path="/add-product">
              <AddProduct />
            </Route>
          </Switch>
        </Router>
      </CurrencyProvider>
    )
  }
}