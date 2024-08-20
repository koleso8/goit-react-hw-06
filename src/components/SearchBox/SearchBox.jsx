import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { useId } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';

export const SearchBox = () => {
  const searchInputId = useId();

  const dispatch = useDispatch();

  return (
    <div className={clsx(s.box)}>
      <label htmlFor={searchInputId}>
        Find contact by name
        <FaSearch className={clsx(s.iconSearch)} />
      </label>
      <input
        placeholder="search by name"
        type="text"
        name="search"
        id={searchInputId}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
