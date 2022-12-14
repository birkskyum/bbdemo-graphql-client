
import { CurrencyContext, ICurrencyContext } from '../contexts/CurrencyState';
import {useContext} from 'react'
import { format} from 'mathjs'
import styled from 'styled-components'

const StyledPrice = styled.p`
  text-align:center;
  font-size: 12pt;
  font-weight: bold;
  font-family: 'Arial';

`

export function ProductPriceTag(props: {priceUSD: number}){

  const context = useContext(CurrencyContext) as ICurrencyContext

  if (context.exchangeRate.loading) {
    return (<p></p>)
  }

  const exchangeRate = context.exchangeRate.data.exchangeFromOneUSD
  const currency = context.currency.currency

  const price = format(props.priceUSD * exchangeRate, {notation: 'fixed', precision: currency.decimalDigits});

  return (
    <StyledPrice>{price} {currency.symbolNative}</StyledPrice>
    )
}