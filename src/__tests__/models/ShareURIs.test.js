import assert from 'assert';
import ShareURIs from '../../models/ShareURIs';

describe('ShareURIs', () => {
  it('is an immutable map that store the different social share uris', () => {
    const URIs = new ShareURIs();
    const Map = ShareURIs.getURIMap();
    const toShare = 'http://www.google.com';

    assert.equal(URIs.getFacebook(toShare), `${Map.get('facebook')}${toShare}`);
    assert.equal(URIs.getTwitter(toShare), `${Map.get('twitter')}${toShare}`);
    assert.equal(URIs.getGooglePlus(toShare), `${Map.get('google-plus')}${toShare}`);
  });
});
