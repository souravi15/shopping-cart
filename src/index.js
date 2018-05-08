import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShoppingApp />, document.getElementById('root'));
registerServiceWorker();
