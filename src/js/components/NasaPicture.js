import React from 'react';

export const NasaPicture = React.createClass({
	render() {
		return (
			<figure className="picture">
				<h4 className="title">
					{this.props.data.title}
				</h4>
				
				<div className="picture__content">
					<img src={this.props.data.url} title={this.props.data.title} className="picture__img" />
				</div>
			
				<h5 className="description">
					{this.props.data.explanation}
				</h5>
			</figure>
		);
	}
});