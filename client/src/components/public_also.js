import React from 'react';
import { useQuery, gql } from "@apollo/client";

const PUBLIC_ALSO_QUERY = gql`
  query publicAlsoQuery {
    public_also {
      id
      name
      type
    }
  }
`;

const PublicAlso = () => {
  const {
    data,
    loading,
    refetch,
  } = useQuery(PUBLIC_ALSO_QUERY);

  return (
    <div>
      <p>Public response: { loading ? 'Loading...' : <code>{JSON.stringify(data)}</code> }</p>
      <button onClick={() => refetch()}>Run public also query</button>
    </div>
  );
}

export default PublicAlso;