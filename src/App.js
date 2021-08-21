import React, { Component } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import AddContacts from './components/AddContacts/AddContacts';
import Filter from './components/Filter/Filter';
import Title from './components/Title/Title';
import shortid from 'shortid';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: [],
    filter: '',
  };
  AddContact = ({ name, phone }) => {
    const contact = {
      id: shortid.generate(),
      name,
      phone,
    };

    this.state.contacts.find(elem => elem.name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const onDeleteContact = this.deleteContact;
    const onFilterContact = this.filterContact;
    const visibleContacts = this.getVisibleContact();

    return (
      <>
        <h1>Телефонная книга</h1>
        <Title title={'Добавить контакт'} />
        <AddContacts onSubmit={this.AddContact} />
        <Filter value={filter} onChange={onFilterContact} />
        <Title title={'Список контактов'} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </>
    );
  }
}

export default App;
