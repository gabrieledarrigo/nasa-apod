import React from 'react';

export const Video = React.createClass({
	render() {
		return (
			<figure className="video">
				<h4 className="title">
					{ this.props.data.title }
				</h4>
			
				<div className="picture__content">
					<iframe width="960" height="540" src={ this.props.data.url } frameBorder="0" allowFullScreen=""></iframe>
				</div>

				<h5 className="description">
					{ this.props.data.explanation }
				</h5>
			</figure>
		);
	}
});