import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import NasaApod from './components/NasaApod';

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/nasa-apod/" component={ NasaApod }></Route>
        <Route path="/nasa-apod/date/:date" component={ NasaApod }></Route>
    </Router>
), document.getElementById('main'));