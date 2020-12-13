import styled from 'styled-components'
import { ProductCard } from './ProductCard';

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-evenly;
`

export function ProductsList(props: {products:any[]}) {
  return (
    <FlexboxContainer>
      { props.products.map((product)=>{
        return (<ProductCard key={product.id} product={product} />)
      })}
    </FlexboxContainer>
  )
}