import styled from 'styled-components'
import { ProductCard } from '../components/ProductCard';
import {  Button, message } from 'antd'
import {
  Link, useHistory
} from "react-router-dom";


const FlexboxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-evenly;
`

export function ProductListPage(props: {products:any[]}) {

  const history = useHistory()
  return (
    <FlexboxContainer>
      { props.products.map((product)=>{
        return (
          <ProductCard key={product.id} product={product} />
        )
      })}
      <Button type="primary" block onClick={()=>{history.push('/add-product')}}>Add product</Button>
    </FlexboxContainer>
  )
}