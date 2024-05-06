import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {`${name}: ${number}`}{' '}
            <Button key={id} type="submit" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};
