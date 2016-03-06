import assert from 'assert';
import sinon from 'sinon';
import data from '../fixtures/response';
import dateUtils from '../../src/js/utils/date-utils';
import nasa from '../../src/js/services/nasa';

describe('NasaService', () => {
    let sandbox, fetchFn;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        fetchFn = (stubber, cb) => {
            return stubber.stub(global, 'fetch', url => new Promise(cb));
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('will fetch the picture of the day from Nasa API', () => {
        const response = {
            status : 200,
            headers: {
                'Content-Type': 'application/json'
            },
            json() {
                return data;
            }
        };

        const fetch = fetchFn(sandbox, resolve => resolve(response));

        nasa.get().then(res => {
            assert.equal(fetch.callCount, 1);
            assert.equal(fetch.calledWith(
                `https://api.nasa.gov/planetary/apod?hd=true&api_key=3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl&date=${dateUtils.today()}`
            ), true);

            assert.deepEqual(res, data);
        });
    });
});
