import React, { Component } from 'react';
import './ContactProfile.css';

class ContactProfile extends Component {
  render() {
    const { profile, closeProfile } = this.props;
    const fullname = `${profile.firstName}, ${profile.lastName.toUpperCase()}`;

    return (
      <div className="card">
        <span className="close__btn" onClick={() => closeProfile()}></span>
        <div className="banner">
          <img alt="" src={profile.avatar} />
        </div>
        <div className="divider"></div>
        <h2 className="name">{fullname}</h2>
        <div className="username" data-testid="contact-username">{profile.username}</div>
        <div className="desc">
          <p data-testid="contact-email">{profile.email}</p>
          <p data-testid="contact-phone">{profile.phone}</p>
          <p data-testid="contact-postcode">{profile.postcode}</p>
          <p data-testid="contact-street">{profile.street}, {profile.city}, {profile.state}</p>
        </div>
      </div>
    );
  }
}

export default ContactProfile;
