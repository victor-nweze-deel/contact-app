import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        count,
      },
    } = this;

    let className = 'tab__list__item';

    if (activeTab === label) {
      className += ' tab__list--active';
    }

    return (
      <li className={className} onClick={onClick}>
        {count && <span className="tab__count">{count}</span>}
        {label}
      </li>
    );
  };
}

export default Tab;
