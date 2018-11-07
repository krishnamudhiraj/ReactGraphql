import withApollo from 'next-with-apollo'; // provides a HOC which exposes our ApoloClient via a prop
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
	return new ApolloClient({
		uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
		request: operation => {
			operation.setContext({
				fetchOptions: {
					credentials: 'include',
				},
				headers,
			});
		},
	});
}

export default withApollo(createClient);
