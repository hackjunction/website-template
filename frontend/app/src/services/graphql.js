import ApolloClient from 'apollo-boost';
import config from '../config'
import gql from 'graphql-tag';

import Fragments from './graphqlFragments';

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql'
});

const GraphqlService = {

	getAllContent: () => {
		return client.query({
			query: gql`
				query {
					pages {
						...PageFields
					}
					mediafields {
						...MediafieldFields
					}
				}
				${Fragments.PageFields}
				${Fragments.MediafieldFields}
			`
		}).then(data => {
			console.log('DATA', data);
			return data;
		}).catch(e => {
			console.log('ERR', e);
		})
	}
}

export default GraphqlService;