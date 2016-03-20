import React from 'react';

class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className={ this.props.show ? 'error-message' : 'error-message hidden' }>
                { this.props.text }
            </h3>
        );
    }
}

export default ErrorMessage;