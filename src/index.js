// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// alert(document.title); // displays "Hello World!"
// document.title = "Goodbye World!";
// alert(document.title); // displays "Goodbye World!"

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'

let store = createStore(todoApp)

render(
  <Root store={store} />,
  document.getElementById('root')
)