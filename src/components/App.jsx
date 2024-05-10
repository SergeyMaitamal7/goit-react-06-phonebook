import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import { FormContacts } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Container>
      <Section title={'Phonebook'}>
        <FormContacts />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
