import React, { Component } from 'react';

class TabContent extends Component {
  render() {
    const { contacts } = this.props;

    if (!(contacts && contacts.length)) return(<div></div>);

    return (
      <div className="tab__content__container">
        <div className="container__row">
          <div className="container__column">
            <div className="container__card">
              {contacts && contacts.slice(0, Math.round(contacts.length/2)).map((contact) => {
                const fullname = `${contact.firstName}, ${contact.lastName.toUpperCase()}`;
                return (
                  <p key={contact.email}><span>{fullname}</span></p>
                );
              })}
            </div>
          </div>

          <div className="container__column">
            <div className="container__card">
              {contacts && contacts.slice(Math.round(contacts.length/2)).map((contact) => {
                const fullname = `${contact.firstName}, ${contact.lastName.toUpperCase()}`;
                return (
                  <p key={contact.email}><span>{fullname}</span></p>
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
