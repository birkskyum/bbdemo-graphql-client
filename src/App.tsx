import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Main } from './Main'
import { client } from "./apolloclient";
import {GlobalProvider} from './contexts/GlobalState'

export function App() {

  return (
      <ApolloProvider client={client}>
        <GlobalProvider>
          <Main />
        </GlobalProvider>
      </ApolloProvider>
  );
}

