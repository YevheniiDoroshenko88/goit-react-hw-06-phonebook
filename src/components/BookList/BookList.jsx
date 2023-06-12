import React from 'react';
import {
  ListUl,
  ListLi,
  SpanName,
  SpanNumber,
  ListButton,
} from './BookList.styled.jsx';
import { removeContact } from '../../redux/Slice.jsx';
import { useDispatch, useSelector } from 'react-redux';

export function BookList() {
  const filter = useSelector(state => state.contact.filter);
  console.log(filter);
  const contactsList = useSelector(state => state.contact.items);
  const dispatch = useDispatch();
  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  console.log(filteredContacts);
  return (
    <ListUl>
      {contactsList.length > 0 &&
        filteredContacts.map(contact => {
          return (
            <ListLi key={contact.id}>
              <SpanName>{contact.name}</SpanName>:
              <SpanNumber>{contact.number}</SpanNumber>
              <ListButton onClick={() => dispatch(removeContact(contact.id))}>
                Delete
              </ListButton>
            </ListLi>
          );
        })}
    </ListUl>
  );
}
