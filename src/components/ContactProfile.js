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
        <div className="username">{profile.username}</div>
        <div className="desc">
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.postcode}</p>
          <p>{profile.street}, {profile.city}, {profile.state}</p>
        </div>
      </div>
    );
  }
}

export default ContactProfile;
