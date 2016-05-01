import React from 'react';

class LoadingSpinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={ this.props.loading ? 'loading-spinner is-visible' : 'loading-spinner' }>
                <div className="loading-spinner__indicator"></div>
            </div>
        );
    }
}

export default LoadingSpinner;