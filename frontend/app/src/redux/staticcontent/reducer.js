import * as ActionTypes from './actionTypes';
import { handle } from 'redux-pack';

const initialState = {
    textfields: {},
    mediafields: {},
    loading: false,
    error: false,
    lastUpdate: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_STATIC_CONTENT: {
            return handle(state, action, {
                start: prevState => ({ ...prevState, loading: true, error: false }),
                finish: prevState => ({ ...prevState, loading: false }),
                failure: prevState => ({ ...prevState, error: true }),
                success: prevState => {
                    return {
                        ...prevState,
                        textfields: {
                            foo: 'bar'
                        },
                        mediafields: {
                            baz: 'bar'
                        },
                        lastUpdate: Date.now()
                    };
                }
            });
        }
        default:
            return state;
    }
}
