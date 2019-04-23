import axios from './axios'
import config from '../config'
const URL = config.API_BASE_URL + '/mediafields'

const MediafieldService = {

	count: () => {
		return axios.get(`${URL}/count`);
	},

	getAll: () => {
		return axios.get(URL);
	},

	getOne: (id) => {
		return axios.get(`${URL}/${id}`);
	}
}

export default MediafieldService