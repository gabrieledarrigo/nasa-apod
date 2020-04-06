import assert from 'assert';
import sinon from 'sinon';
import Immutable from 'immutable';
import Media from '../../models/Media';
import DateImmutable from '../../models/DateImmutable';
import nasa from '../../services/nasa';

const data = {
  date: '2016-01-01',
  explanation: "A new year's treat for binoculars, as 2016 begins Comet Catalina (C/2013 US10) now sweeps through planet Earth's predawn skies near bright Arcturus, alpha star of Bootes. But this telescopic mosaic from December 21 follows the pretty tails of the comet across a field of view as wide as 10 full moons. The smattering of distant galaxies and faint stars in the background are in the constellation Virgo. Trailing behind the comet's orbit, Catalina's dust tail fans out below and left in the frame. Its ion tail is angled toward the top right, away from the Sun and buffeted by the solar wind. On January 17, the outward bound visitor from the Oort Cloud will make its closest approach to Earth, a mere 110 million kilometers away, seen near bright stars along the handle of the Big Dipper.",
  hdurl: 'http://apod.nasa.gov/apod/image/1601/2013US10_151221_1200Chambo.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'Comet Catalina Tails',
  url: 'http://apod.nasa.gov/apod/image/1601/2013US10_151221_1024Chambo.jpg',
};

describe('NasaService', () => {
  let sandbox; let response; let fetchFn; let fetch;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    fetchFn = (stubber, cb) => stubber.stub(global, 'fetch').callsFake(() => new Promise(cb));

    response = {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      json() {
        return data;
      },
    };

    fetch = fetchFn(sandbox, (resolve) => resolve(response));
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should fetch the picture of the day from Nasa API', () => {
    nasa.getMedia().then(() => {
      assert.equal(fetch.callCount, 1);
      assert.equal(fetch.calledWith(
        `https://api.nasa.gov/planetary/apod?hd=true&api_key=3RwXJFXWRPro4tK010f9CzXSQ36XkZWrzFZXhfTl&date=${DateImmutable.today()}`,
      ), true);
    });
  });

  it('should return a Media object with the nasa picture data', () => {
    nasa.getMedia().then((media) => {
      assert.equal(Immutable.is(media, new Media(data)), true);
      assert.deepEqual(media, data);
    });
  });

  it('return an empty Media object', () => {
    const empty = nasa.getEmptyMedia();
    assert.equal(Immutable.is(empty, new Media()), true);
  });
});
