import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import { client } from '../apolloclient'
import { ApolloProvider } from '@apollo/client'
import { useCurrencies } from './useCurrencies';

jest.setTimeout(10000)
test('useCurrencies', async () => {
  
  function TestComponent() { 
    const products = useCurrencies()
    if (products.loading) {
      return <div data-testid="generic-testing">Loading</div>
    } else {
      return <div data-testid="generic-testing">{JSON.stringify(products.data)}</div>
    }
  }

  render(<ApolloProvider client={client}><TestComponent /></ApolloProvider>);
  let linkElement = screen.getByTestId('generic-testing');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.innerHTML).toBe('Loading')

  await waitFor(()=>{
    let linkElement = screen.getByTestId('generic-testing');
    expect(linkElement).toBeInTheDocument();
    let data = JSON.parse(linkElement.innerHTML)
    expect(data.currencies.length).toBeGreaterThan(60)  
    let currency = data.currencies[0]
    expect(currency.code.length).toBe(3)
    expect(currency.name.length).toBeGreaterThan(5)  
    expect(currency.namePlural.length).toBeGreaterThan(5)  

  })
 
});

