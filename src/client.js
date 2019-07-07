import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';


const client = new ApolloClient({
	link: new HttpLink({uri: 'https://gql.st.devjs.ru/graphql'}),
	cache: new InMemoryCache(),
	ssrMode: true,
});

export default client;
