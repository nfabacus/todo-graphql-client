import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})


const Root = () => (
  <ApolloProvider client={client}>
    {/* wrap App with react router here */}
    <App />
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
