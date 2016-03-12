import fetch from 'isomorphic-fetch';
import dateUtils from '../helpers/date-utils';
import Media from '../models/Media';

const KEY = '3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl';
const URL = 'https://api.nasa.gov/planetary/apod?hd=true&api_key=';

const self = typeof global !== 'undefined'
    ? global
    : window;

const nasa = {
    get(dateChanged) {
        const date = typeof dateChanged !== 'undefined'
                        ? dateChanged.get('date')
                        : dateUtils.today();

        const PARSED = `${URL}${KEY}&date=${dateUtils.parse(date)}`;

        return self.fetch(PARSED)
                    .then(res => res.json())
                    .then(data => new Media(data));
    },
    getEmptyMedia() {
        return new Media();
    }
};

export default nasa;