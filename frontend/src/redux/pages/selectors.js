import { createSelector } from 'reselect';
import config from '../../config';

const UPDATE_INTERVAL = config.IS_DEV ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const pages = state => state.pages.data;
export const pagesMeta = state => ({
	loading: state.pages.loading,
	error: state.pages.error,
	lastUpdate: state.pages.lastUpdate
})

export const pagesShouldUpdate = createSelector(
	pagesMeta,
	meta => {
		return Date.now() - meta.lastUpdate > UPDATE_INTERVAL
	}
)