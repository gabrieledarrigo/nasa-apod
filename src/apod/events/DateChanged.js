import Immutable from 'immutable';

export const DATE_CHANGED = 'DATE_CHANGED';

export default Immutable.Record({
    type: DATE_CHANGED,
    occurred: null,
    date: null
});

