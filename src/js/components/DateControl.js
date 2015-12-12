import React from 'react';
import date from '../utils/date';
import emitter from '../utils/event-emitter';

export const DateControl = React.createClass({
    getInitialState() {
        return {
            dateIsValid: true
        };
    },
    handleChange(e) {         
        return this.setState({
            dateIsValid: date.isValidDate(e.target.value),
            date: e.target.value
        });
    },
    submit() {
        emitter.emit('date:change', this.state.date);
    },
    render() {
        return(
            <div className="date-control">
                <label className="date-control__label">
                    <span className="date-control__text">
                        Choose a date to browse more photos.
                    </span>

                    <input type="date" className="date-control__input" onChange={this.handleChange}/>

                    <span className={this.state.dateIsValid ? 'date-control__error' : 'date-control__error is--visible'}>
                        Please choose a valid date
                    </span>
                </label>

                <div className="btn btn--green" onClick={this.submit}>
                    Browse
                </div>
            </div>
        );
    }
});