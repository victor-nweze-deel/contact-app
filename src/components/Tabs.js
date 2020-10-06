import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key) || initialValue;
    return item
  });

  const setValue = value => {
    setStoredValue(value.toString());
    window.localStorage.setItem(key, value.toString());
  };

  return [storedValue, setValue];
}

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useLocalStorage('activeTab', 'a');

  return (
    <div className="tabs">
      <ol className="tab__list">
        {children.map((child) => {
          const { label, count } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              count={count}
              onClick={setActiveTab}
            />
          );
        })}
      </ol>
      <div className="tab__content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
