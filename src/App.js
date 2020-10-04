import React, { useState, useEffect } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';
import config from './config';
import ContactProcessor from './lib/ContactProcessor';

function App() {
  const [contacts, setContacts] = useState({});
  const [hasError, setErrors] = useState(false);
  const {
    title,
    userUrl,
    numberCards,
    tabs: letters,
  } = config;
  const url = `${userUrl}/?results=${numberCards}`

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      res
        .json()
        .then(res => {
          const contactsMap = ContactProcessor.getContactMap(res.results);
          setContacts(contactsMap);
        })
        .catch(err => setErrors(err));
    }
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <h1>{title}</h1>
      <Tabs>
        {letters.map((letter) => {
          return (
            <div
              key={letter}
              label={letter}>
              <TabContent contacts={contacts[letter]}></TabContent>
            </div>
          );
        })}
      </Tabs>
      {hasError}
    </div>
  );
}

export default App;
