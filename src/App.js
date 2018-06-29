import React, { Component } from 'react';

class ContactList extends Component {
  render(){
    const people = this.props.contacts;
    
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
      <div className="App">
      <ContactList contacts={[
        {name: 'Keira'},  
        {name: 'Loma'},  
        {name: 'Zakary'}  
      ]}/>
      <ContactList contacts={[
        {name: 'Cordie'},  
        {name: 'Nikolas'},  
        {name: 'Charlotte'}  
      ]}/>
      </div>
    );
  }
}

export default App;
