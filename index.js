import React from 'react';
import { render } from 'react-dom';

import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

render (
  <div>
    <CoordinatesButton />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
