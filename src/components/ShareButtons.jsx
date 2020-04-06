/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { inject } from '../utils/high-order-components';
import ShareURIs from '../models/ShareURIs';

class ShareButtons extends React.Component {
  share = (url, title) => () => window.open(url, title)

  render() {
    const { URIs, href } = this.props;

    return (
      <div className="share-buttons">
        <div
          className="btn share-buttons__element share-buttons__element--facebook"
          onClick={this.share(URIs.getFacebook(href), 'Nasa APOD - Gabriele D\'Arrigo')}
          role="button"
          tabIndex={0}
        >

          <span className="fa fa-facebook" />
        </div>

        <div
          className="btn share-buttons__element share-buttons__element--twitter"
          onClick={this.share(URIs.getTwitter(href), 'Nasa APOD - Gabriele D\'Arrigo')}
          role="button"
          tabIndex={0}
        >

          <span className="fa fa-twitter" />
        </div>

        <div
          className="btn share-buttons__element share-buttons__element--google-plus"
          onClick={this.share(URIs.getGooglePlus(href), 'Nasa APOD - Gabriele D\'Arrigo')}
          role="button"
          tabIndex={0}
        >

          <span className="fa fa-google-plus" />
        </div>
      </div>
    );
  }
}

export default inject(ShareButtons, { URIs: new ShareURIs() });
