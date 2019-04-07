import * as ActionTypes from './actionTypes';
import { mediafieldsShouldUpdate } from './selectors';
import logger from '../../utils/logger';
import MediafieldService from '../../services/mediafields';

export const updateMediafields = () => (dispatch, getState) => {
	if (!mediafieldsShouldUpdate(getState())) {
		logger('Mediafields found in cache, skipping update');
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_MEDIAFIELDS,
		promise: MediafieldService.getAll(),
		meta: {
			onFailure: (e) => logger('Error updating mediafields', e)
		}
	})
}