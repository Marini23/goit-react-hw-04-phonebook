import { useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlibalStyle';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(`contacts`, [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState(``);

  const addContact = newContact => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      return alert(`${newContact.name} is already in contacts!`);
    }
    setContacts(prevState => [{ id: nanoid(), ...newContact }, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filterContact = newFilter => {
    setFilter(newFilter);
  };

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContact();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={filterContact} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      <GlobalStyle />
    </div>
  );
};
