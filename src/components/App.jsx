import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import { FormContacts } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? '';
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ id, name, number }) => {
    const doubleContact = contacts.find(contact => contact.name === name);
    if (doubleContact) {
      alert(`You have already added ${name} to Contact list!!!`);
      return;
    }

    const contact = { id: nanoid(), name, number };
    setContacts([...contacts, contact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = evt => {
    console.log('objgdhdhdfh');
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
    console.log('object');
    return visibleContacts;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Section title={'Phonebook'}>
        <FormContacts submit={handleSubmit} />
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter} onChange={handleFilter} />
        {visibleContacts && (
          <ContactList
            contacts={visibleContacts}
            deleteContact={deleteContact}
          />
        )}
      </Section>
    </Container>
  );
};
