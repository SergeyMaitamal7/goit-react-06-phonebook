import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { addFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <>
      <p>Find contacrs by name</p>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilter}
        required
      />
    </>
  );
};
