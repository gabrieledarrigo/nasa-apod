import React from 'react';
import DayPicker from 'react-day-picker';
import dateUtils from '../utils/date-utils';
import emitter from '../utils/event-emitter';

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

        emitter.emit('date:change', this.state.date);
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