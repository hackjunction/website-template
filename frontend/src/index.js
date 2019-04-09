import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CloudinaryContext } from 'cloudinary-react'
import WebFont from 'webfontloader';
import config from './config'

import configureStore from './redux/configureStore'

const { store, persistor } = configureStore()

WebFont.load({
	google: {
		families: [
			'Montserrat:400,400i,700,700i',
			'Lato:400,400i,700,700i',
		]
	}
});

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<CloudinaryContext cloudName={config.CLOUDINARY_CLOUD_NAME}>
				<App />
			</CloudinaryContext>
		</PersistGate>
	</Provider>
	, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();