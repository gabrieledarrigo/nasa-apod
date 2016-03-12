import React from 'react';
import DayPicker from 'react-day-picker';
import DateChanged, { DATE_CHANGED } from '../events/DateChanged';
import dateUtils from '../helpers/date-utils';
import emitter from '../helpers/event-emitter';

class DateControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: null };
    }

    handleChange(e, date) {
        this.setState({ date: date }, () =>  this.emit());
    }

    isSame(day) {
        return dateUtils.isSame(day, this.state.date)
    }

    isAfter(day) {
        return dateUtils.isAfter(day);
    }

    emit() {
        if (this.isAfter(this.state.date)) {
            return;
        }

        emitter.emit('date:change',  new DateChanged({
            date: this.state.date,
            occurred: dateUtils.now
        }));
    }

    render() {
        return(
            <div className="date-control">
                <h3 className="date-control__title">
                    Choose a date to browse more photos.
                </h3>

                <div className="date-control__content">
                    <DayPicker onDayClick={ this.handleChange.bind(this) }
                               toMonth={ dateUtils.now() }
                               modifiers={{
                                    selected : this.isSame.bind(this),
                                    isDisabled: this.isAfter.bind(this)
                               }} />
                </div>
            </div>
        );
    }
}

export default DateControl;