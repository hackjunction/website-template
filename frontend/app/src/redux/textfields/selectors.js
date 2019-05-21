import { createSelector } from 'reselect';
import config from '../../config';

const UPDATE_INTERVAL = config.IS_DEV ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const textfields = state => state.textfields.data;
export const textfieldsKeys = state => state.textfields.keys;
export const textfieldsMeta = state => ({
	loading: state.textfields.loading,
	error: state.textfields.error,
	lastUpdate: state.textfields.lastUpdate,
})

export const textfieldsShouldUpdate = createSelector(
	textfieldsMeta,
	meta => {
		return Date.now() - meta.lastUpdate > UPDATE_INTERVAL
	}
)