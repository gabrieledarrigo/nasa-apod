import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        path="/"
        component={NasaApod}
      />
      <Route
        path="/:date"
        component={NasaApod}
      />
    </Router>
  </React.StrictMode>,

  window.document.getElementById('root'),
);

serviceWorker.unregister();
