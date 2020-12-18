import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

const AuthorizedApolloProvider = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [bearerToken, setBearerToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const token = isAuthenticated ? await getAccessTokenSilently() : "";
      setBearerToken(token);
    };
    getToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  const customFetch = async (_, options) => {
    const { operationName } = JSON.parse(options.body);
    const newHeaders = { ...options.headers };
    if (bearerToken) newHeaders.Authorization = `Bearer ${bearerToken}`;

    const modifiedOpetions = {
      ...options,
      headers: newHeaders,
    };
    return fetch(`http://localhost:4000?operation=${operationName}`, modifiedOpetions);
  };

  const cache = new InMemoryCache();
  const link = new HttpLink({
    fetch: customFetch,
  });
  const client = new ApolloClient({
    link,
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export { AuthorizedApolloProvider };
