import React from 'react';
import classNames from 'classnames';

class LoadingSpinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames('loading-spinner', { 'is-visible': this.props.loading })}>
                <div className="loading-spinner__logo"></div>
                <div className="loading-spinner__indicator"></div>
            </div>
        );
    }
}

export default LoadingSpinner;