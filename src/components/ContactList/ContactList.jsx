import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlise';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const dispatch = useDispatch();

  const normilizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normilizedFilter)
  );

  return (
    <>
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            {`${name}: ${number}`}{' '}
            <Button
              key={id}
              type="submit"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};
