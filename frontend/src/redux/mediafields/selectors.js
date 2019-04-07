import { createSelector } from 'reselect';
import config from '../../config';

const UPDATE_INTERVAL = config.IS_DEV ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const mediafields = state => state.mediafields.data;
export const mediafieldsKeys = state => state.mediafields.keys;
export const mediafieldsMeta = state => ({
	loading: state.mediafields.loading,
	error: state.mediafields.error,
	lastUpdate: state.mediafields.lastUpdate,
})

export const mediafieldsShouldUpdate = createSelector(
	mediafieldsMeta,
	meta => {
		return Date.now() - meta.lastUpdate > UPDATE_INTERVAL
	}
)