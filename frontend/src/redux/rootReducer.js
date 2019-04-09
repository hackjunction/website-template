import { combineReducers } from 'redux'

// Import the reducer from each module here, and add it to the combined reducer
import mediafields from './mediafields/reducer';
import textfields from './textfields/reducer';
import pages from './pages/reducer';
import technologies from './technologies/reducer';

export default () => combineReducers({
	mediafields,
	textfields,
	pages,
	technologies,
});
