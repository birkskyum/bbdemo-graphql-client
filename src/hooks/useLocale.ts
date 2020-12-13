import { useEffect, useReducer } from 'react';
import axios from 'axios'
import {localeReducer} from '../reducers/localeReducer'
export function useLocale(){

  const [{loading, locale, error}, dispatch] = useReducer(localeReducer, 
  { loading: true,
    locale: null,
    error: null, 
  })

  useEffect(()=>{
    axios.get('https://ipapi.co/json?').then((data: any)=>{
      dispatch({
        type: "setLocale",
        locale: data
      })},(e)=>{
        dispatch({
          type: "errorred",
          error: e
        })
    });
  }, [])

  return {loading, locale, error}
}