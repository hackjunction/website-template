import { combineReducers } from 'redux';

// Import the reducer from each module here, and add it to the combined reducer
import staticContent from './staticcontent/reducer';

export default () =>
    combineReducers({
        staticContent
    });
