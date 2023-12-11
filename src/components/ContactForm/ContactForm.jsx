import { useDispatch, useSelector } from 'react-redux';
import {
  onInputChangeNameAction,
  resetNameAction,
} from '../../redux/name/nameSlice';
import {
  onInputChangeNumberAction,
  resetNumberAction,
} from '../../redux/number/numberSlice';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const name = useSelector(state => state.name.name);
  const number = useSelector(state => state.number.number);
  const dispatch = useDispatch();

  const onInputChangeName = ({ target }) => {
    if (target.name === 'name') {
      dispatch(onInputChangeNameAction(target.value));
    }
  };

  const onInputChangeNumber = ({ target }) => {
    if (target.name === 'number') {
      dispatch(onInputChangeNumberAction(target.value));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    dispatch(resetNameAction());
    dispatch(resetNumberAction());
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={css.form__input}
        type="text"
        name="name"
        value={name}
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onInputChangeName}
      />

      <label htmlFor="number">Number</label>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
        value={number}
        onChange={onInputChangeNumber}
      />

      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
