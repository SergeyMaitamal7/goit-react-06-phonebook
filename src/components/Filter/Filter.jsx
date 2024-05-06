import { Input } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacrs by name</p>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};
