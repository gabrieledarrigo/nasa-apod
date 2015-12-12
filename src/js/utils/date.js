import moment from 'moment';

const isValidDate = function(date) {
    return moment(date).isValid();
};

const today = function() {
    return moment().format('YYYY-MM-DD');
};

export default {
	isValidDate,
	today
}