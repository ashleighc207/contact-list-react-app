import React, { Component } from 'react';
import ListContacts from './ListContacts';


class App extends Component {
  state = {
    contacts : [
      {
        "id": "keira",
        "name": "Keira Lind",
        "email": "keira@reacttraining.com",
        "avatarURL": "https://s3.amazonaws.com/uifaces/faces/twitter/itstotallyamy/128.jpg"
      },
      {
        "id": "loma",
        "name": "Loma Walker",
        "email": "loma@reacttraining.com",
        "avatarURL": "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
      },
      {
        "id": "zakary",
        "name": "Zakary Balistreri",
        "email": "zakary@reacttraining.com",
        "avatarURL": "https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg"
      }
    ]
  }
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  render() {
    return (
      <div>
        <ListContacts 
        onDeleteContact={this.removeContact} 
        contacts={this.state.contacts}
        />
      </div>
    )
  }
}

export default App;