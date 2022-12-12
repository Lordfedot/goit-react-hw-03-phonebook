import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactsList from './Phonebook/ContactsList';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import Box from './Box';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  addContact = ({ name, phone }) => {
    const contact = {
      id: nanoid(),
      name,
      number: phone,
    };
    if (this.checkExistingContact(contact) === false) {
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };
  checkExistingContact = contact => {
    const { contacts } = this.state;
    if (contacts.map(contact => contact.name).includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return false;
    }
    return true;
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(_, PrevState) {
    if (PrevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const { addContact, deleteContacts, changeFilter, getVisibleContacts } =
      this;

    const visibleContacts = getVisibleContacts();

    return (
      <>
        <Box pl="40px" mr="auto">
          <h1>Phonebook</h1>
          <ContactForm contacts={contacts} onSubmit={addContact} />
          <div>
            <h2>Contacts</h2>
            <Filter onChangeFilter={changeFilter} filter={filter} />
            <ContactsList
              contacts={visibleContacts}
              onDelete={deleteContacts}
            />
          </div>
        </Box>
      </>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onSubmit: PropTypes.func,
};
Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
