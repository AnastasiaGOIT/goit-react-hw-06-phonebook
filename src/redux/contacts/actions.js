export const deleteContactAction = contactId => {
  return { type: 'deleteContact', payload: contactId };
};
export const addContactAction = newContact => {
  return { type: 'addContact', payload: newContact };
};
