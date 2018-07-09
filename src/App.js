import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    "id": "keira",
    "name": "Keira Lind",
    "email": "keira@reacttraining.com",
    "avatarURL": ""
  },
  {
    "id": "loma",
    "name": "Loma Walker",
    "email": "loma@reacttraining.com",
    "avatarURL": ""
  },
  {
    "id": "zakary",
    "name": "Zakary Balistreri",
    "email": "zakary@reacttraining.com",
    "avatarURL": ""
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    )
  }
}

export default App;