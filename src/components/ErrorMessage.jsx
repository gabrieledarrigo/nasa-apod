/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classNames from 'classnames';

class ErrorMessage extends React.Component {
  render() {
    const { text, show } = this.props;

    return (
      <h3 className={classNames('error-message', { hidden: !show })}>
        { text }
      </h3>
    );
  }
}

export default ErrorMessage;
