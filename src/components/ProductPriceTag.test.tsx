import React from 'react'
import { ProductPriceTag } from './ProductPriceTag';
import ShallowRenderer from 'react-test-renderer/shallow';

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


test('ProductPriceTag loading', () => {
  useContextMock.mockReturnValue({exchangeRate:{loading:true}});
  const element = new ShallowRenderer().render(
      <ProductPriceTag priceUSD={5.23} />
  );

  expect(element.props.children).toBeUndefined();
})


test('ProductPriceTag showing 1 digits', () => {
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
      <ProductPriceTag priceUSD={5.23} />
  );

  expect(element.props.children.join('')).toBe("13.1 #")
  
})


test('ProductPriceTag showing 3 digit', () => {
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
        decimalDigits: 3
      }
    }
  });

  const element = new ShallowRenderer().render(
      <ProductPriceTag priceUSD={5.23} />
  );

  expect(element.props.children.join('')).toBe("13.075 #")
  
})