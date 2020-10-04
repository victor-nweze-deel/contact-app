import React, { Component } from 'react';

import ContactProfile from './ContactProfile';

class TabContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProfile: null
    };
  }

  setActiveProfile = (profile) => {
    this.setState({ activeProfile: profile });
  }

  closeProfile = () => {
    this.setState({ activeProfile : null });
  }

  render() {
    const { props: { contacts }, state: { activeProfile }, setActiveProfile, closeProfile } = this;

    if (!(contacts && contacts.length)) return <div />;

    const firstPane = activeProfile ? [] : contacts.slice(0, Math.round(contacts.length/2));
    const secondPane = activeProfile ? contacts : contacts.slice(Math.round(contacts.length/2));

    return (
      <div className="tab__content__container">
        <div className="container__row">
          <div className="container__column">
            {activeProfile && <ContactProfile profile={activeProfile} closeProfile={closeProfile} />}
            <div className="container__card">
              {contacts && firstPane.map((contact) => {
                const fullname = `${contact.firstName}, ${contact.lastName.toUpperCase()}`;
                return (
                  <p className="profile__name" key={contact.email}>
                    <span onClick={() => setActiveProfile(contact)}>{fullname}</span>
                  </p>
                );
              })}
            </div>
          </div>

          <div className="container__column">
            <div className="container__card">
              {contacts && secondPane.map((contact) => {
                const fullname = `${contact.firstName}, ${contact.lastName.toUpperCase()}`;
                return (
                  <p className="profile__name" key={contact.email}>
                    <span onClick={() => setActiveProfile(contact)}>{fullname}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabContent;
