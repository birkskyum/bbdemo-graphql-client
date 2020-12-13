import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import { client } from '../apolloclient'
import { ApolloProvider } from '@apollo/client'
import { useProducts } from './useProducts';

jest.setTimeout(10000)
test('useProducts', async () => {
  
  function TestComponent() { 
    const products = useProducts()
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
    expect(data.products.length).toBeGreaterThan(2)  
  })
 
});

