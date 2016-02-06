import fetch from 'whatwg-fetch';
import dateUtils from '../utils/date';

const key = '3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl';
const url = 'https://api.nasa.gov/planetary/apod?hd=true&api_key=';
const today = dateUtils.today();

export default {
	get(date = today, cb = null) {
		let parsed = `${url}${key}&date=${dateUtils.parse(date)}`;

        return window.fetch(parsed)
            .then(res => res.json())
            .then(json => cb(null, json))
            .catch(err => cb(err, null));
    }
};