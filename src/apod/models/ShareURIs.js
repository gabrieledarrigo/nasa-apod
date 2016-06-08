import Immutable from 'immutable';

const URIs = Immutable.Map({
    facebook: 'https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=',
    twitter: 'https://twitter.com/intent/tweet?text=',
    'google-plus': 'https://plus.google.com/share?url='
});

export default class ShareURI {
    static getURIMap() {
        return URIs;
    }

    getFacebook(href) {
        return `${URIs.get('facebook')}${href}`;
    }

    getTwitter(text) {
        return `${URIs.get('twitter')}${text}`;
    }

    getGooglePlus(url) {
        return `${URIs.get('google-plus')}${url}`;
    }
}