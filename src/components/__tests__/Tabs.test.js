import React from 'react';
import ReactDom from 'react-dom';
import Tabs from '../Tabs';

it('renders the tabs without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Tabs children={[]}></Tabs>, div);
});
