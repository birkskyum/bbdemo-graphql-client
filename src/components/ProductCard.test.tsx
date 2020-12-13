import React from 'react'
import { ProductCard } from './ProductCard';
import ShallowRenderer from 'react-test-renderer/shallow';
import {  screen } from '@testing-library/react';
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

const productdata={
    id: "3", 
    name: "name", 
    priceUSD: 24, 
    photos: ["photo54.png", "photo5.png", "photo6.png"]
  }


test('ProductCard', ( ) => {
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
        code: 'TSD',
        decimalDigits: 1
      }
    }
  });

  const element = new ShallowRenderer().render(
      <ProductCard product={productdata} />
  );

  const carousel = element.props.children[0]
  expect(carousel.props.items[0].props.style.height).toBe("200px")

  const imageElement = carousel.props.items[0].props.children
  expect(imageElement.type).toBe("img")
  expect(imageElement.props.src).toBe("photo54.png")
 
  
})
