import moment from 'moment';
import Immutable from 'immutable';

const DEFAULT_FORMAT = 'YYYY-MM-DD';
const Record = Immutable.Record({
  date: null,
});

export default class DateImmutable extends Record {
  static format(date, format = DEFAULT_FORMAT) {
    return moment(date).format(format);
  }

  static today(format = DEFAULT_FORMAT) {
    return DateImmutable.format(moment(), format);
  }

  static toDate() {
    return new Date();
  }

  static isValid(date) {
    return moment(date).isValid();
  }

  static isSame(d1, d2) {
    return moment(d1).isSame(d2);
  }

  static isAfter(d1, d2) {
    return moment(DateImmutable.format(d1)).isAfter(DateImmutable.format(d2));
  }
}
