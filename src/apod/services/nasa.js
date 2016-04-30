import fetch from 'isomorphic-fetch';
import DateImmutable from '../models/DateImmutable';
import Media from '../models/Media';

const KEY = '3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl';
const URL = 'https://api.nasa.gov/planetary/apod?hd=true&api_key=';

const self = typeof global !== 'undefined'
    ? global
    : window;

const nasa = {
    getMedia(dateImmutable) {
        const date = typeof dateImmutable !== 'undefined'
                        ? dateImmutable.get('date')
                        : DateImmutable.today();

        const PARSED = `${URL}${KEY}&date=${DateImmutable.format(date)}`;

        return self.fetch(PARSED)
                    .then(res => res.json())
                    .then(data => new Media(data));
    },
    getEmptyMedia() {
        return new Media();
    }
};

export default nasa;