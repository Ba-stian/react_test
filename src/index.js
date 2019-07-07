import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {ApolloProvider} from 'react-apollo';
import client from './client.js';


ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>,


	document.getElementById('root'));
