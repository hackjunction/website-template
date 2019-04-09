import * as ActionTypes from './actionTypes';
import { technologiesShouldUpdate } from './selectors';
import TechnologyService from '../../services/technologies';
import logger from '../../utils/logger';

export const updateTechnologies = () => (dispatch, getState) => {
	if (!technologiesShouldUpdate(getState())) {
		logger('Technologies found in cache, skipping update');
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_TECHNOLOGIES,
		promise: TechnologyService.getAll(),
		meta: {
			onFailure: (e) => logger('Error updating technologies', e)
		}
	})
}
