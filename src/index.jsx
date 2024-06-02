/* 
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './index'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
