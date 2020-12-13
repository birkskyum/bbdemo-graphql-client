import React from 'react'
import { useLocale } from './useLocale';
import { render, screen, waitFor } from '@testing-library/react';

jest.setTimeout(10000)
test('useLocale', async() => {
  
  function TestComponent() { 
    const locale = useLocale()
    return <div data-testid="generic-testing">{JSON.stringify(locale)}</div>
  }

  render(<TestComponent />);
  let linkElement = screen.getByTestId('generic-testing');
  expect(linkElement).toBeInTheDocument();

  let locale = JSON.parse(linkElement.innerHTML)
  expect(locale.loading).toBe(true)

  await waitFor(()=>{
    let linkElement = screen.getByTestId('generic-testing');
    expect(linkElement).toBeInTheDocument();

    let locale = JSON.parse(linkElement.innerHTML)
    expect(locale.loading).toBe(false)
    expect(locale.locale.data.currency.length === 3).toBe(true)
  })

});

