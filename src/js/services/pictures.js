import fetch from 'whatwg-fetch';
import date from '../utils/date';

const key = '3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl';
const url = 'https://api.nasa.gov/planetary/apod?format=JSON&concept_tags=true&hd=true&api_key=';
const today = date.today();

export default {
	get(date = today, cb) {
		let parsed = `${url}${key}&date=${date}`;

        return window.fetch(parsed)
            .then((res) => res.json())
            .then((json) => cb(null, json))
            .catch((err) => cb(err, null));
    }
};