import React from 'react';

export function inject(Component, props) {
    class Inject extends React.Component {
        constructor(props) {
            super(props);
        }

        merge() {
            return Object.assign({}, props, this.props);
        }

        render() {
            return <Component { ...this.merge() } />
        }
    }

    Inject.WrappedComponent = Component;

    return Inject;
}