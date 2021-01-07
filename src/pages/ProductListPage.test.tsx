import React from 'react'
import { ProductPriceTag } from '../components/PriceTag';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ProductListPage} from './ProductListPage'
let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
    React.useContext = realUseContext;
});

const productdata=[{
  id: "1", 
  name: "name", 
  priceUSD: 2, 
  photos: ["photo1", "photo2", "photo3"]
},
  {
    id: "3", 
    name: "name", 
    priceUSD: 24, 
    photos: ["photo54", "photo5", "photo6"]
  },
  {
    id: "5", 
    name: "name", 
    priceUSD: 22, 
    photos: ["photo7"]
  }]


test('ProductListPage', () => {
  useContextMock.mockReturnValue({
    exchangeRate:{
      loading:false, 
      data:{
        exchangeFromOneUSD:2.5
      }
    },
    currency: {
      currency: {
        symbolNative: '#',
        name: 'testName',
        namePlural: 'testNames',
        codoe: 'TSD',
        decimalDigits: 1
      }
    }
  });

  const element = new ShallowRenderer().render(
      <ProductListPage products={productdata} />
  );

  expect(element.props.children.length).toBe(3)
  expect(element.props.children[2].props.product.priceUSD).toBe(22)
  
})
