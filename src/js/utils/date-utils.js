import moment from 'moment';

const FORMAT = 'YYYY-MM-DD';

const isValidDate = date => moment(date).isValid();

const isSame = (d1, d2) => moment(d1).isSame(d2);

const isAfter = date => moment(date).isAfter(new Date());

const parse = date => moment(date).format(FORMAT);

const today = () => moment().format(FORMAT);

const now = () => new Date();

export default { isValidDate, isSame, isAfter, parse, today, now }