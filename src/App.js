import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import config from './config';

//background-color: #f9fcff;
//background-image: linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%);

function App() {
  const { tabs: letters } = config;

  return (
    <div className="App">
      <h1>Tabs Demo</h1>
      <Tabs>
        {letters.map((letter) => {
          return (
            <div
              key={letter}
              label={letter}>
              Showing the guts for letter: <strong>{letter}</strong>!
            </div>
          );
        })}
      </Tabs>
    </div>
  );
}

export default App;
