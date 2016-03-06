import fetch from 'isomorphic-fetch';
import dateUtils from '../utils/date-utils';

const KEY = '3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl';
const URL = 'https://api.nasa.gov/planetary/apod?hd=true&api_key=';
const today = dateUtils.today();

const self = typeof global !== 'undefined'
    ? global
    : window;

const nasa = {
    get(date = today) {
        const PARSED = `${URL}${KEY}&date=${dateUtils.parse(date)}`;

        return self.fetch(PARSED)
            .then(res => res.json());

        //.then(json => cb(null, json))
        //.catch(err => cb(err, null));
    }
};

export default nasa;