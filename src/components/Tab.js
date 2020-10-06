import React from 'react';
import PropTypes from 'prop-types';

function Tab({ activeTab, label, count, onClick }) {
  const handleClick = () => onClick(label);
  let className = 'tab__list__item';

  if (activeTab === label) {
    className += ' tab__list--active';
  }

  return (
    <li className={className} onClick={handleClick}>
      {count && <span className="tab__count">{count}</span>}
      {label}
    </li>
  );
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
