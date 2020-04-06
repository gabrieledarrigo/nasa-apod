import React from 'react';

export function inject(Component, props) {
  class Inject extends React.Component {
    merge() {
      return { ...props, ...this.props };
    }

    render() {
      return <Component {...this.merge()} />;
    }
  }

  Inject.WrappedComponent = Component;

  return Inject;
}
