import { useProducts } from '../hooks/useProducts'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import 'react-alice-carousel/lib/alice-carousel.css';
import {ProductPriceTag} from '../components/PriceTag'
import { message, Button } from 'antd';



const StyledProductPage = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-content: space-evenly;
margin-top: 110px;`

const ProductWrapper = styled.div`
img {
  height: 200px;
  width: auto;
}
margin: 10px;

a {
  color: black;
}
`

const ProductImages = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-evenly;
  
`



const ProductImage = styled.div`
margin-bottom: 50px;
width:240px;
height:200px;
text-align:center;

`

const ProductHeader = styled.p`
  text-align: center;
`

export function ProductDetailsPage(){

  const history = useHistory()
  const location = useLocation();
  const urlpath = location.pathname.split("/")
  const productID = urlpath[urlpath.length - 1];
  const products = useProducts()

  if (products.loading) {
    <p>Loading</p>
  } 
  
  const product = products.data.products.find((product)=>{
    return product.id == productID
  })

  function deleteProduct(e) {
    setTimeout(()=>{
      history.push('/')
    }, 5000)
    message.info('You have requested the product to be deleted. Redirecting in 5 sec.');
  }


  return (
    <>
    <Button onClick={(e)=>{deleteProduct(e)}} type="primary" block danger>Delete product</Button>
    <StyledProductPage>
    <ProductWrapper key={product.id}>
      <ProductImages>
      {
      product.photos.map((photo, index)=>{
          return <ProductImage  key={index}><img  src={photo}  alt="Img" /></ProductImage>
        })
      }
      </ProductImages>
    
        <ProductPriceTag priceUSD={product.priceUSD } />
        <ProductHeader>{product.name}</ProductHeader>
      
    </ProductWrapper>


    </StyledProductPage>

    </>
  )
} 