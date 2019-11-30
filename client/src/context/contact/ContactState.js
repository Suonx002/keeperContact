import React, { useReducer } from 'react';
import uuid from 'uuid/v4';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: uuid(),
        name: 'Vuthy',
        email: 'vuthy@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: uuid(),
        name: 'amy',
        email: 'amy@gmail.com',
        phone: '220-111-1111',
        type: 'personal'
      },
      {
        id: uuid(),
        name: 'bob',
        email: 'bob@gmail.com',
        phone: '33-111-1111',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
