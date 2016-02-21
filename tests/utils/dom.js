import jsdom from 'jsdom';

const markup = '<!doctype html><html><body></body></html>';
const document = jsdom.jsdom(markup);
const window = document.defaultView;

global.document = document;
global.window = window;
