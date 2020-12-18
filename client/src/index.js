import React from 'react';
import ReactDOM from 'react-dom';
import { CustomApolloProvider } from './CustomApolloProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CustomApolloProvider>
      <App />
    </CustomApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
