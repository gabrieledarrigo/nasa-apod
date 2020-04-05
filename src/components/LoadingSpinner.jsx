/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classNames from 'classnames';

class LoadingSpinner extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <div className={classNames('loading-spinner', { 'is-visible': loading })}>
        <div className="loading-spinner__logo" />
        <div className="loading-spinner__indicator" />
      </div>
    );
  }
}

export default LoadingSpinner;
