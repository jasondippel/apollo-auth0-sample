import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useAuth0 } from '@auth0/auth0-react';

const PUBLIC_QUERY = gql`
  query publicQuery {
    public {
      id
      name
    }
  }
`;

const PROTECTED_QUERY = gql`
  query protectedQuery {
    protected {
      id
      name
    }
  }
`;

const App = () => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();
  const {
    data: publicData,
    loading: publicLoading,
    refetch: publicRefetch,
  } = useQuery(PUBLIC_QUERY);
  const {
    data: protectedData,
    loading: protectedLoading,
    refetch: protectedRefetch,
  } = useQuery(PROTECTED_QUERY);

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <p>Public response: { publicLoading ? 'Loading...' : <code>{JSON.stringify(publicData)}</code> }</p>
      <button onClick={() => publicRefetch()}>Run public query</button>

      <p>Protected response: { protectedLoading ? 'Loading...' : <code>{JSON.stringify(protectedData)}</code> }</p>
      <button onClick={() => protectedRefetch()}>Run protected query</button>

      <p>Authenticated? { isAuthenticated ? 'Yes' : 'No' } (Run protected query to authenticate)</p>

      {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
      {isAuthenticated && <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>}
    </div>
  );
}

export default App;
