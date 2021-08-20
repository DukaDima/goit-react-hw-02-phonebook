import React, { Component } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import AddContacts from './components/AddContacts/AddContacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Anna Bishop', phone: '124-567-7950' },
      { id: 'id-2', name: 'Petya Ivanov', phone: '124-567-8902' },
      { id: 'id-3', name: 'Uasya Petrov', phone: '124-567-3344' },
    ],
  };
  AddContact = ({ name, phone }) => {
    console.log(name);
    console.log(phone);
    const contact = {
      id: shortid.generate(),
      name,
      phone,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts } = this.state;
    const onDeleteContact = this.deleteContact;

    return (
      <>
        <h2>Добавить контакт</h2>
        <AddContacts onSubmit={this.AddContact} />
        <h2>Список контактов</h2>
        <ContactsList contacts={contacts} onDeleteContact={onDeleteContact} />
      </>
    );
  }
}

export default App;
