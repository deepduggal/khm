import React from 'react';
import 'material-components-web/dist/material-components-web.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';

render(<App />, document.getElementById('root'));
registerServiceWorker();
