import { useState } from 'react';
import { Form, Label, Input, Button } from './Form.styled';

export const FormContacts = ({ submit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    setName(name);
    setNumber(number);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    submit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form action="" onSubmit={handleSubmit} onChange={handleChange}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Label>

      <Label htmlFor="number">
        Phone{' '}
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
