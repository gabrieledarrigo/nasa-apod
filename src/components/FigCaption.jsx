import React from 'react';

const FigCaption = ({
  title,
  explanation,
}) => (
  <figcaption className="figcaption">
    <h4 className="title">
      {title}
    </h4>

    <h5 className="explanation">
      {explanation}
    </h5>
  </figcaption>
);

export default FigCaption;
