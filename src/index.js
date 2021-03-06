import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import stores from './redux-api/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
