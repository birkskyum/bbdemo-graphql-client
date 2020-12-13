import React from 'react'
import { localeReducer } from './localeReducer';

test('localeReducer setLocale', () => {
  
  let state = {
    locale: null,
    loading: false,
    error: null,
  }

  let action = {
    type: 'setLocale',
    locale: {
      currency: 'Test'
    }
  }

  let newState = localeReducer(state, action)

  expect(JSON.stringify(newState.locale)).toBe(JSON.stringify({currency: 'Test'}))
  expect(newState.loading).toBe(false)

})

test('localeReducer error', () => {
  
  const state = {
    locale: null,
    loading: false,
    error: null,
  }

  const action = {
    type: 'errored',
    error: { message: "Test error"}
  }

  const newState = localeReducer(state, action)

  expect(newState.error.message).toBeDefined()
  expect(newState.loading).toBe(false)

})





