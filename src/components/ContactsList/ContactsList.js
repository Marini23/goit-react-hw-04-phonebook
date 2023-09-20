import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';

import { ListContacts } from './ContactsList.styled';

export const ContactList = ({ contacts, onDelete }) => { 
    return (
        <ListContacts>
            {contacts.map(contact => (
                <ContactListItem contact={contact} key={contact.id} onDelete={onDelete} />
            ))}
        </ListContacts>
    );
};

ContactList.propType = {
    contacts: PropTypes.array,
    onDelete: PropTypes.func,
};