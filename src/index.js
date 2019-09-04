import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Application/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);


ReactDOM.render(app, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// console.log(module.hot);
// if(module.hot) {
//   console.log('ehehe')
//   module.hot.accept('./Application/App', () => ReactDOM.render(require('./Application/App').default))
// }