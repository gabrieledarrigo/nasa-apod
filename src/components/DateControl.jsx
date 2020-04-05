import React from 'react';
import { withRouter } from 'react-router-dom';
import DayPicker from 'react-day-picker';
import DateImmutable from '../models/DateImmutable';
import ErrorMessage from './ErrorMessage';

class DateControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      error: false,
      errorMessage: 'Date must be between Jun 16, 1995 and today.',
    };
  }

  handleChange = (date) => {
    if (this.isAfterToday(date)) {
      return this.setState(() => ({
        error: true,
      }));
    }

    this.setState(() => ({
      date,
      error: false,
    }));

    const { history } = this.props;

    return history.push(`/${DateImmutable.format(date)}`);
  }

  isSameDay = (day) => {
    const { date } = this.state;
    return DateImmutable.isSame(day, date);
  }

  isAfterToday = (day) => DateImmutable.isAfter(day, DateImmutable.today())

  render() {
    const { error, errorMessage } = this.state;

    return (
      <div className="date-control">
        <h3 className="date-control__title">
          Choose a date to browse more photos.
        </h3>

        <ErrorMessage show={error} text={errorMessage} />

        <div className="date-control__content">
          <DayPicker
            onDayClick={this.handleChange}
            toMonth={DateImmutable.toDate()}
            modifiers={{
              selected: this.isSameDay,
              isDisabled: this.isAfterToday,
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(DateControl);
