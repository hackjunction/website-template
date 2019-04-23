import axios from 'axios'
import config from '../config'
const URL = config.API_BASE_URL + '/mediafields'

const MediafieldService = {

	count: () => {
		return axios.get(`${URL}/count`).then(res => res.data)
	},

	getAll: () => {
		return axios.get(URL).then(res => {
			console.log('RES', res);
			return res.data;
		})
	},

	getOne: (id) => {
		return axios.get(`${URL}/${id}`).then(res => res.data)
	}
}

export default MediafieldService