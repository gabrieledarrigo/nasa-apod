import React from 'react';
import classNames from 'classnames';

class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className={ classNames('error-message', { hidden: !this.props.show }) }>
                { this.props.text }
            </h3>
        );
    }
}

export default ErrorMessage;