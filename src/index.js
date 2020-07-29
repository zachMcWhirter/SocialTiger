import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from './components/ApplicationViews';


  // Now update your index.js by adding a root component of <Router /> which gets imported from the React Router package. Within <Router>, place the <SocialTiger /> child component. This tells React "I will be placing Routes in my SocialTiger component."
ReactDOM.render(
  <Router>
    <ApplicationViews/>
  </Router>,
  document.getElementById('root')
);

