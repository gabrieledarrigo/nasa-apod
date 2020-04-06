import assert from 'assert';
import Media from '../../models/Media';

const data = {
  date: '2016-01-01',
  explanation: "A new year's treat for binoculars, as 2016 begins Comet Catalina (C/2013 US10) now sweeps through planet Earth's predawn skies near bright Arcturus, alpha star of Bootes. But this telescopic mosaic from December 21 follows the pretty tails of the comet across a field of view as wide as 10 full moons. The smattering of distant galaxies and faint stars in the background are in the constellation Virgo. Trailing behind the comet's orbit, Catalina's dust tail fans out below and left in the frame. Its ion tail is angled toward the top right, away from the Sun and buffeted by the solar wind. On January 17, the outward bound visitor from the Oort Cloud will make its closest approach to Earth, a mere 110 million kilometers away, seen near bright stars along the handle of the Big Dipper.",
  hdurl: 'http://apod.nasa.gov/apod/image/1601/2013US10_151221_1200Chambo.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'Comet Catalina Tails',
  url: 'http://apod.nasa.gov/apod/image/1601/2013US10_151221_1024Chambo.jpg',
};

describe('Media', () => {
  it('is an immutable object acting as a media entity with a representable url, a title, an explanation and a media_type', () => {
    const media = new Media(data);

    assert.equal(media.get('url'), data.url);
    assert.equal(media.get('title'), data.title);
    assert.equal(media.get('explanation'), data.explanation);
    assert.equal(media.get('media_type'), data.media_type);
  });
});
