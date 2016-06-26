import React from 'react';
import { inject } from '../utils/high-order-components';
import ShareURIs from '../models/ShareURIs';

class ShareButtons extends React.Component {
    constructor(props) {
        super(props);
        this.share = this.share.bind(this);
    }

    share(url, title) {
        return function() {
            return window.open(url, title);
        }
    }

    render() {
        return(
            <div className="share-buttons">
                <div className="btn share-buttons__element share-buttons__element--facebook" 
                    onClick={ this.share(this.props.URIs.getFacebook(this.props.href), 'Nasa APOD - Gabriele D\'Arrigo') }>

                    <span className="fa fa-facebook"></span>
                </div>

                <div className="btn share-buttons__element share-buttons__element--twitter" 
                    onClick={ this.share(this.props.URIs.getTwitter(this.props.text), 'Nasa APOD - Gabriele D\'Arrigo') }>
                    
                    <span className="fa fa-twitter"></span>
                </div>

                <div className="btn share-buttons__element share-buttons__element--google-plus" 
                    onClick={ this.share(this.props.URIs.getGooglePlus(this.props.href), 'Nasa APOD - Gabriele D\'Arrigo') }>
                    
                    <span className="fa fa-google-plus"></span>
                </div>
            </div>
        );
    }
}

export default inject(ShareButtons, { URIs: new ShareURIs() });