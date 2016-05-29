import assert from 'assert';
import moment from 'moment';
import Immutable from 'immutable';
import DateImmutable from '../../src/apod/models/DateImmutable';

describe('DateImmutable', () => {
    it('is an immutable event object carrying data about when the event occurred and the actual selected date', () => {
        const date = new Date();
        const dateImmutable = new DateImmutable({ date });
        assert.equal(dateImmutable.get('date'), date);
    });

    it('return, give a format, a date in the same format', () => {
        assert.equal(DateImmutable.format(new Date(), 'YYYY-MM-DD'), moment().format('YYYY-MM-DD'));
        assert.equal(DateImmutable.format(new Date(), 'd'), moment().format('d'));
        assert.equal(DateImmutable.format(new Date(), 'HH:mm:ss'), moment().format('HH:mm:ss'));
    });

    it('return today\'s date in the desired format', () => {
        assert.equal(DateImmutable.today(), moment().format('YYYY-MM-DD'));
        assert.equal(DateImmutable.today('d'), moment().format('d'));
        assert.equal(DateImmutable.today('HH:mm:ss'), moment().format('HH:mm:ss'));
    });

    it('return a Date object', () => {
        assert.deepEqual(DateImmutable.toDate(), new Date());
    });

    it('validate a date', () => {
        assert.equal(DateImmutable.isValid(new Date()), true);
        assert.equal(DateImmutable.isValid('2016-10-12'), true);
        assert.equal(DateImmutable.isValid('2016-14-12'), false);
    });

    it('check if two date are equal', () => {
        assert.equal(DateImmutable.isSame('2016-10-12', '2016-10-12'), true);
        assert.equal(DateImmutable.isSame(new Date(), new Date()), true);
        assert.equal(DateImmutable.isSame('2016-10-11', '2016-09-01'), false);
    });

    it('check if a date came after an other', () => {
        assert.equal(DateImmutable.isAfter('2016-10-12', '2016-09-02'), true);
        assert.equal(DateImmutable.isAfter('2014-01-02', '2013-12-31'), true);
        assert.equal(DateImmutable.isAfter(new Date(), new Date()), false);
    });
});
