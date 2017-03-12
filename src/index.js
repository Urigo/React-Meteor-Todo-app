import 'meteor-client';
import 'api/tasks';
import './index.scss';

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
