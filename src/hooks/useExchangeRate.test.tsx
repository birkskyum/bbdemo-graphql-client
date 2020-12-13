import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import { client } from '../apolloclient'
import { ApolloProvider } from '@apollo/client'
import { useExchangeRate } from './useExchangeRate';

jest.setTimeout(10000)
test('useExchangeRate', async () => {
  
  function TestComponent() { 
    const exchangeRate = useExchangeRate('DKK')
    return <div data-testid="generic-testing">{JSON.stringify(exchangeRate)}</div>
  }

  render(<ApolloProvider client={client}><TestComponent /></ApolloProvider>);
  let linkElement = screen.getByTestId('generic-testing');
  expect(linkElement).toBeInTheDocument();
  let exchangeRate = JSON.parse(linkElement.innerHTML)
  expect(exchangeRate.loading).toBe(true)

  await waitFor(()=>{
    let linkElement = screen.getByTestId('generic-testing');
    expect(linkElement).toBeInTheDocument();
    let exchangeRate = JSON.parse(linkElement.innerHTML)
    expect(exchangeRate.loading).toBe(false)
    expect(exchangeRate.data.exchangeFromOneUSD).toBeGreaterThan(0.1)  
  })

});

