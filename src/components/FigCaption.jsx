/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class FigCaption extends React.Component {
  render() {
    const { title, explanation } = this.props;

    return (
      <figcaption className="figcaption">
        <h4 className="title">
          {title}
        </h4>

        <h5 className="explanation">
          {explanation}
        </h5>
      </figcaption>
    );
  }
}

export default FigCaption;
