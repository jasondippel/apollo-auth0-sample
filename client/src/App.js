import React, { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import PublicAlso from './components/public_also';

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
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  

  return (
    <div>
      <p>Public response: { publicLoading ? 'Loading...' : <code>{JSON.stringify(publicData)}</code> }</p>
      <button onClick={() => publicRefetch()}>Run public query</button>
      <button onClick={() => setShowSecondComponent(true)}>Show Second Component</button>
      {showSecondComponent && <PublicAlso />}
    </div>
  );
}

export default App;
