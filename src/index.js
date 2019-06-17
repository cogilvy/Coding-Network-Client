import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

// import timeago from 'timeago.js'

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
