import assert from 'assert';
import data from '../fixtures/response';
import Media from '../../src/models/Media';

describe('Media', () => {
  it('is an immutable object acting as a media entity with a representable url, a title, an explanation and a media_type', () => {
    const media = new Media(data);

    assert.equal(media.size, 4);
    assert.equal(media.get('url'), data.url);
    assert.equal(media.get('title'), data.title);
    assert.equal(media.get('explanation'), data.explanation);
    assert.equal(media.get('media_type'), data.media_type);
  });
});
