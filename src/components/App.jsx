import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  deleteContactAction,
} from '../redux/contacts/contactSlice';
import { onInputChangeAction } from '../redux/filter/filterSlice';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    dispatch(onInputChangeAction(target.value));
  };

  const deleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  const addContact = ({ name, number }) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = [
      ...contacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ];
    dispatch(addContactAction(newContact));
  };

  let normalized = filter ? filter.toLowerCase() : '';
  let visibleList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalized)
  );
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h3>Contacts</h3>
      <Filter value={filter} onChange={onInputChange} />
      <ContactList props={visibleList} deleteContact={deleteContact} />
    </div>
  );
};
