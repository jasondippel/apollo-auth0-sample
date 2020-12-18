import React from 'react';
import { useQuery, gql } from "@apollo/client";

const PUBLIC_QUERY = gql`
  query publicQuery {
    public {
      id
      name
    }
  }
`;

const App = () => {
  const {
    data: publicData,
    loading: publicLoading,
    refetch: publicRefetch,
  } = useQuery(PUBLIC_QUERY);

  return (
    <div>
      <p>Public response: { publicLoading ? 'Loading...' : <code>{JSON.stringify(publicData)}</code> }</p>
      <button onClick={() => publicRefetch()}>Run public query</button>
    </div>
  );
}

export default App;
