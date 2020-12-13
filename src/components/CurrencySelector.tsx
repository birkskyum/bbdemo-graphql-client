import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'
import { CurrencyContext } from '../contexts/CurrencyState'

import { Select, Spin } from 'antd'
import 'antd/dist/antd.css';
import CurrencyFlag from 'react-currency-flags';
import styled from 'styled-components'

export interface Currency {
  name: string,
  code: string,
  namePlural: string,
}

const SelectWrapper = styled.div`
  text-align:center;
`
const StyledSelect = styled(Select)`
    margin: 40px;
    text-align: left;
  `

export function CurrencySelector() {

  const globalContext: any = useContext(GlobalContext)
  const currencyContext: any = useContext(CurrencyContext)
  if(currencyContext.currency.loading ) {
    return <Spin />
  }

  const { Option } = Select;

  return (
    <SelectWrapper>
    <StyledSelect 
    showSearch
    style={{ width: 240 }}
    placeholder="Select currency"
    optionFilterProp="children"
    value={currencyContext.currency.currency.code}
    onChange={(e)=>{ currencyContext.currency.setCurrencyByCode(e) }}
    filterOption={(input, option:any) => {
      return option.children[2].toLowerCase().indexOf(input.toLowerCase()) >= 0 || option.value.toLowerCase().indexOf(input.toLowerCase()) >=0
    }
    }
    >
      {globalContext.currencies.data.currencies.map((currency: Currency)=>{
        return <Option key={currency.code} value={currency.code}><CurrencyFlag style={{border: "1px solid #888"}} currency={currency.code} size="sm" />  {currency.namePlural}</Option>
      })}

    </StyledSelect>
    </SelectWrapper>
    
  )
} 