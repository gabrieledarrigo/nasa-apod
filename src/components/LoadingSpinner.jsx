import React from 'react';
import classNames from 'classnames';

const LoadingSpinner = ({
  loading,
}) => (
  <div className={classNames('loading-spinner', { 'is-visible': loading })}>
    <div className="loading-spinner__logo" />
    <div className="loading-spinner__indicator" />
  </div>
);

export default LoadingSpinner;
