import assert from 'assert';
import sinon from 'sinon';
import Immutable from 'immutable';
import data from '../fixtures/response';
import Media from '../../src/apod/models/Media';
import dateUtils from '../../src/apod/helpers/date-utils';
import nasa from '../../src/apod/services/nasa';

describe('NasaService', () => {
    let sandbox, response, fetchFn, fetch;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();

        fetchFn = (stubber, cb) => {
            return stubber.stub(global, 'fetch', url => new Promise(cb));
        };

        response = {
            status : 200,
            headers: {
                'Content-Type': 'application/json'
            },
            json() {
                return data;
            }
        };

        fetch = fetchFn(sandbox, resolve => resolve(response));
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should fetch the picture of the day from Nasa API', () => {
        nasa.get().then(() => {
            assert.equal(fetch.callCount, 1);
            assert.equal(fetch.calledWith(
                `https://api.nasa.gov/planetary/apod?hd=true&api_key=3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl&date=${dateUtils.today()}`
            ), true);
        });
    });

    it('should return a Media object with the nasa picture data', () => {
        nasa.get().then(media => {
            assert.equal(Immutable.is(media, new Media(data)), true);
            assert.deepEqual(media, data);
        });
    });

    it('return an empty Media object', () => {
        const empty = nasa.getEmptyMedia();

        assert.equal(Immutable.is(empty, new Media()), true);
    });
});
