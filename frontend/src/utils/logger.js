import '../config';

export default logger = (message, value) => {
	if (config.IS_DEV) {
		console.log(message, value)
	}
}