import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/style.scss';
import NasaApod from './components/NasaApod';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        path="/:date"
        component={NasaApod}
      />
    </Router>
  </React.StrictMode>,

  window.document.getElementById('root'),
);

serviceWorker.unregister();
