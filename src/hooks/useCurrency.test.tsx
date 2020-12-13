import React from 'react'
import { useCurrency,getCurrencyFromCode } from './useCurrency';
import { currencies } from '../testing-data/currencies'
import { render, screen } from '@testing-library/react';

test('getCurrencyFromCode', () => {
  const currency = getCurrencyFromCode("DKK", currencies)
  expect(currency.code).toBe('DKK')
  expect(currency.namePlural).toBe('Danish kroner')
  expect(currency.rounding).toBe(0)
});


test('useCurrency', () => {

  function TestComponent() { 
    const { currency, setCurrencyByCode } = useCurrency("DKK", currencies)
    return <div data-testid="generic-testing">{JSON.stringify(currency)}</div>
  }

  render(<TestComponent />);
  const linkElement = screen.getByTestId('generic-testing');
  expect(linkElement).toBeInTheDocument();

  const currency = JSON.parse(linkElement.innerHTML)
  expect(currency.code).toBe('DKK')
  expect(currency.namePlural).toBe('Danish kroner')
  expect(currency.rounding).toBe(0)
});

