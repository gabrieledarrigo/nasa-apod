import React from 'react';
import DayPicker from 'react-day-picker';
import dateUtils from '../utils/date';
import emitter from '../utils/event-emitter';

export const DateControl = React.createClass({
    getInitialState() {
        return {
            date: null
        };
    },
    handleChange(e, date) {
        this.setState({ date: date }, () =>  this.submit());
    },
    selected(day) {
        return dateUtils.isSame(day, this.state.date)
    },
    submit() {
        emitter.emit('date:change', this.state.date);
    },
    render() {
        return(
            <div className="date-control">
                <h3 className="date-control__title">
                    Choose a date to browse more photos.
                </h3>

                <div className="date-control">
                    <DayPicker onDayClick={ this.handleChange } toMonth={ dateUtils.now() } modifiers={ { selected : this.selected } }/>
                </div>
            </div>
        );
    }
});
