import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

const CustomApolloProvider = ({ children }) => {
  const customFetch = async (_, options) => {
    const { operationName } = JSON.parse(options.body);
    return fetch(`http://localhost:4000?operation=${operationName}`, options);
  };

  const cache = new InMemoryCache();
  const link = new HttpLink({
    fetch: customFetch,
  });
  const client = new ApolloClient({
    link,
    cache,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export { CustomApolloProvider };
