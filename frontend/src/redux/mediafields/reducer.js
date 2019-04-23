import * as ActionTypes from './actionTypes';
import { map } from 'lodash-es';
import { handle } from 'redux-pack';

const initialState = {
	data: {},
	keys: [],
	loading: false,
	error: false,
	lastUpdate: 0
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_MEDIAFIELDS: {
			return handle(state, action, {
				start: prevState => ({ ...prevState, loading: true, error: false }),
				finish: prevState => ({ ...prevState, loading: false }),
				failure: prevState => ({ ...prevState, error: true }),
				success: prevState => {
					console.log('MEDIAFIELDS', action.payload);
					const data = {}
					const keys = map(action.payload, ({ key, media }) => {
						data[key.trim()] = media;
						return key.trim();
					});

					return {
						...prevState,
						data,
						keys,
						lastUpdate: Date.now()
					}
				},
			})
		}
		default: return state
	}
}
