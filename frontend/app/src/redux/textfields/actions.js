import * as ActionTypes from './actionTypes';
import { textfieldsShouldUpdate } from './selectors';
import logger from '../../utils/logger';
import TextfieldService from '../../services/textfields';

export const updateTextfields = () => (dispatch, getState) => {
	if (!textfieldsShouldUpdate(getState())) {
		logger('Textfields found in cache, skipping update');
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_TEXTFIELDS,
		promise: TextfieldService.getAll(),
		meta: {
			onFailure: (e) => logger('Error updating textfields', e)
		}
	})
}