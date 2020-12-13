import React from 'react'
import { CurrencySelector } from './CurrencySelector';
import ShallowRenderer from 'react-test-renderer/shallow';
import {  screen } from '@testing-library/react';
import { currencies } from '../testing-data/currencies'

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

test('CurrencySelector', ( ) => {
  
  useContextMock.mockReturnValue({
    currencies:{data:{currencies:currencies}},
    currency: {
      currency: {
        name: 'Brunei Dollar',
        symbol: 'BN$',
        symbolNative: '$',
        decimalDigits: 2,
        rounding: 0,
        code: 'BND',
        namePlural: 'Brunei dollars',
        countries: ['BN'],
      }
    }
  });

  const element = new ShallowRenderer().render(
      <CurrencySelector />
  );

  expect(element.props.children.props.children.length).toBeGreaterThan(70)
  
})
