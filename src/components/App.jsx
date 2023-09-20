import { Component, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlibalStyle';

export const App = () => {
  const [contacts, setContacts] = useState([
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

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContact = newContact => {
//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       return alert(`${newContact.name} is already in contacts!`);
//     }

//     this.setState(prevState => ({
//       contacts: [{ id: nanoid(), ...newContact }, ...prevState.contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(
//           contact => contact.id !== contactId
//         ),
//       };
//     });
//   };

//   filterContact = newFilter => {
//     this.setState({ filter: newFilter });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem(`contacts`);
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onAdd={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter
//           filter={this.state.filter}
//           onChangeFilter={this.filterContact}
//         />
//         <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
//         <GlobalStyle />
//       </div>
//     );
//   }
// }
