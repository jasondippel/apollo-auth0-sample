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
  const { isAuthenticated } = useAuth0();
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

  return (
    <div>
      <p>Public response: { publicLoading ? 'Loading...' : <code>{JSON.stringify(publicData)}</code> }</p>
      {/* TODO: display error if there is one */}
      <button onClick={() => publicRefetch()}>Run public query</button>

      <p>Protected response: { protectedLoading ? 'Loading...' : <code>{JSON.stringify(protectedData)}</code> }</p>
      {/* TODO: display error if there is one */}
      <button onClick={() => protectedRefetch()}>Run protected query</button>

      <p>Authenticated? { isAuthenticated ? 'Yes' : 'No' } (Run protected query to authenticate)</p>

      {/* TODO: add logout/login button */}
    </div>
  );
}

export default App;
