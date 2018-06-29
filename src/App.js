import React, { Component } from 'react';

class ContactList extends Component {
  render(){
    const people = [
      {name: 'Keira'},  
      {name: 'Loma'},  
      {name: 'Zakary'}  
    ]
    
    return <ul>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  }
}

class App extends Component {
  render() {
    return (
      <ContactList/>
    );
  }
}

export default App;
