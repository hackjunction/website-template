import * as ActionTypes from './actionTypes';
import { pagesShouldUpdate } from './selectors';
import PageService from '../../services/pages';
import logger from '../../utils/logger';

export const updatePages = () => (dispatch, getState) => {
	if (!pagesShouldUpdate(getState())) {
		logger('Pages found in cache, skipping update');
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_PAGES,
		promise: PageService.getAll(),
		meta: {
			onFailure: (e) => logger('Error updating pages', e)
		}
	})
}