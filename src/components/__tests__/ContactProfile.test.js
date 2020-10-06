import React from 'react';
import ReactDom from 'react-dom';
import ContactProfile from '../ContactProfile';

const profile = {
  firstName: 'Victor',
  lastName: 'Nweze',
  phone: 12345,
  email: 'victor@mail.com',
  postcode: 23456,
  street: 'test str',
  city: 'Lagos',
  state: 'Lagos',
};

it('renders the contact profile without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<ContactProfile profile={profile} />, div);
});
