import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {ProductPriceTag} from './ProductPriceTag'
import styled from 'styled-components'
import { IProduct } from '../hooks/useProducts'


const ProductWrapper = styled.div`
width: 240px;
img {
  height: 200px;
  width: auto;
}
margin: 10px;
`

const ProductHeader = styled.p`
  text-align: center;
`

export function ProductCard(props: {product: IProduct}){
  return (<ProductWrapper key={props.product.id}>
      <AliceCarousel
        autoWidth
        infinite
        animationDuration={0}
        autoPlayInterval={2000}
        autoPlayStrategy="all"
        items={props.product.photos.map((photo, index)=>{
        return <div style={{width:"240px", height:"200px", textAlign:"center"}}><img key={index} src={photo}  alt="Img" /></div>
      })} />
      <ProductPriceTag priceUSD={props.product.priceUSD } />
      <ProductHeader>{props.product.name}</ProductHeader>
      
    </ProductWrapper>)
}