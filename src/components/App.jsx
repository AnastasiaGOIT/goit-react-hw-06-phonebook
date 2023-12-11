import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  deleteContactAction,
} from '../redux/contacts/actions';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContact = JSON.parse(contacts);
  //   if (parsedContact) {
  //     setContacts(() => parsedContact);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onInputChange = ({ target }) => {
    dispatch({ type: 'onInputChange', payload: target.value });
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

  let normalized = filter.toLowerCase();
  let visibleList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalized)
  );
  return (
    <div
      style={{
        height: '100vh',
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

// export const App = () => {

//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContact = JSON.parse(contacts);
//     if (parsedContact) {
//       setContacts(() => parsedContact);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const onInputChange = ({ target }) => {
//     setFilter(target.value);
//   };
//   const deleteContact = contactId => {
//     setContacts(prevContact =>
//       prevContact.filter(contact => contact.id !== contactId)
//     );
//   };

//   const addContact = ({ name, number }) => {

//     const isExist = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isExist) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     setContacts(prevState => [
//       ...prevState,
//       {
//         id: nanoid(),
//         name,
//         number,
//       },
//     ]);
//   };

//   let normalized = filter.toLowerCase();
//   let visibleList = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalized)
//   );
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm addContact={addContact} />
//       <h3>Contacts</h3>
//       <Filter value={filter} onChange={onInputChange} />
//       <ContactList props={visibleList} deleteContact={deleteContact} />
//     </div>
//   );
// };
