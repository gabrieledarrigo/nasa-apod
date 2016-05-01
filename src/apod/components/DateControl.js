import React from 'react';
import * as Router from 'react-router';
import DayPicker from 'react-day-picker';
import emitter from '../events/event-emitter';
import DateImmutable from '../models/DateImmutable';
import ErrorMessage from './ErrorMessage';

class DateControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            error: false,
            errorMessage: 'Date must be between Jun 16, 1995 and today.'
        };
    }

    handleChange(e, date) {
        this.setState({ date: date }, () =>  this.emit());
    }

    isSame(day) {
        return DateImmutable.isSame(day, this.state.date);
    }

    isAfter(day) {
        return DateImmutable.isAfter(day, DateImmutable.today());
    }

    emit() {
        if (this.isAfter(this.state.date)) {
            return this.setState({ error: true });
        } else {
            this.setState({ error: false });
        }

        Router.browserHistory.push(`/date/${DateImmutable.format(this.state.date)}`);
        return emitter.emit('date:change');
    }

    render() {
        return(
            <div className="date-control">
                <h3 className="date-control__title">
                    Choose a date to browse more photos.
                </h3>

                <ErrorMessage show={ this.state.error } text={ this.state.errorMessage }/>

                <div className="date-control__content">
                    <DayPicker onDayClick={ this.handleChange.bind(this) }
                               toMonth={ DateImmutable.toDate() }
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