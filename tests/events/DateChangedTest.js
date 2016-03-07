import assert from 'assert';
import Immutable from 'immutable';
import data from '../fixtures/response';
import DateChanged, { DATE_CHANGED } from '../../src/apod/events/DateChanged';

describe('DateChanged', () => {
    it('is an immutable event object carrying data about when the event occurred and the actual selected date', () => {
        const occurred = new Date();
        const date = new Date();
        const dateChanged = new DateChanged({ occurred, date });

        assert.equal(dateChanged.get('type'), DATE_CHANGED);
        assert.equal(dateChanged.get('occurred'), occurred);
        assert.equal(dateChanged.get('date'), date);
    });
});
