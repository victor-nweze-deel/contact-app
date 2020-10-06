import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

test('renders the app without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
});
