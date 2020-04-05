import React from 'react';
import classNames from 'classnames';

const ErrorMessage = ({
  text,
  show,
}) => (
  <h3 className={classNames('error-message', { hidden: !show })}>
    { text }
  </h3>
);

export default ErrorMessage;
