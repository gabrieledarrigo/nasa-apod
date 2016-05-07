import React from 'react';
import * as Router from 'react-router';
import DayPicker from 'react-day-picker';
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
        if (this.isAfterToday(date)) {
            return this.setState({ error: true });
        }

        this.setState({ date: date, error: false });
        return Router.browserHistory.push(`/nasa-apod/date/${DateImmutable.format(date)}`);
    }

    isSameDay(day) {
        return DateImmutable.isSame(day, this.state.date);
    }

    isAfterToday(day) {
        return DateImmutable.isAfter(day, DateImmutable.today());
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
                                    selected : this.isSameDay.bind(this),
                                    isDisabled: this.isAfterToday.bind(this)
                               }} />
                </div>
            </div>
        );
    }
}

export default DateControl;