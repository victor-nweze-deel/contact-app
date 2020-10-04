import config from '../config';

const { tabs } = config;

class ContactProcessor {
  static getContactMap(rawContacts) {
    const map = {};
    tabs.forEach((tab) => {
      map[tab.toLowerCase()] = [];
    });
    rawContacts.forEach((contact) => {
      const {
        name: {
          first: firstName,
          last: lastName,
          title
        },
        email,
        cell,
        location: {
          city,
          state,
          postcode,
          street: {
            number: streetNumber,
            name: streetName
          },
        },
        login: { username },
        picture: { medium: avatar }
      } = contact;

      const userKey = lastName.toLowerCase().substring(0, 1);

      if (map[userKey]) {
        map[userKey].push({
          title,
          city,
          email,
          state,
          avatar,
          username,
          lastName,
          firstName,
          postcode,
          phone: cell,
          street: `${streetNumber} ${streetName}`,
        })
      }
    });

    return map;
  }
}

export default ContactProcessor;
