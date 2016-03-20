import React from 'react';

class FigCaption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <figcaption className="figcaption">
                <h4 className="title">
                    {this.props.title}
                </h4>

                <h5 className="explanation">
                    {this.props.explanation}
                </h5>
            </figcaption>
        );
    }
}

export default FigCaption;