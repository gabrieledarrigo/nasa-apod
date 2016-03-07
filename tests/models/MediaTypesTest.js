import assert from 'assert';
import Immutable from 'immutable';
import MediaTypes from '../../src/apod/models/MediaTypes';

describe('MediaTypes', () => {
    it('is an immutable map that store the different types of media that Nasa API returns', () => {
        const VIDEO = 'video';
        const PICTURE = 'picture';
        const DEFAULT = 'default';

        const types = new MediaTypes({[VIDEO]: VIDEO, [PICTURE]: PICTURE });

        assert.equal(types.has(VIDEO), true);
        assert.equal(types.has(PICTURE), true);
        assert.equal(types.get(VIDEO), VIDEO);
        assert.equal(types.get(PICTURE), PICTURE);

        assert.notDeepEqual(types, types.set(DEFAULT, DEFAULT));
    });
});
