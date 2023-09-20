import React from 'react';
import PropTypes from 'prop-types';
import {
    ContactItemList,
    BtnDelete,
} from './ContactsListItem.styled';

export const ContactListItem = ({  contact, onDelete }) => { 
    const {  id, name, number } = contact;
    return (
        <ContactItemList >
            <p>{name}</p>
            <p>{number}</p>
            <BtnDelete type="button" onClick={() => onDelete(id)}>Delete</BtnDelete>
        </ContactItemList>
    );
};

ContactItemList.propType = {
    contact: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func,
};