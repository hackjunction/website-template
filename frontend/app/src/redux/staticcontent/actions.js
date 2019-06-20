import * as ActionTypes from './actionTypes';
import * as GraphqlService from '../../services/graphql/client';
import { staticContentShouldUpdate } from './selectors';

export const updateStaticContent = () => (dispatch, getState) => {
    if (!staticContentShouldUpdate(getState())) {
        return;
    }

    dispatch({
        type: ActionTypes.UPDATE_STATIC_CONTENT,
        promise: GraphqlService.getStaticContent(),
        meta: {
            onFailure: e => console.log('Error updating events', e)
        }
    });
};
