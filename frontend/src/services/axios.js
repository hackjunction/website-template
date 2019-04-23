import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(function (response) {
	console.log('RESPONSE', response);
	if (response.headers['content-type'].indexOf('application/json') !== -1) {
		return response.data;
	}
	return Promise.reject(new Error('Response was not application/json'));
}, function (error) {
	return Promise.reject(error);
})

export default instance;