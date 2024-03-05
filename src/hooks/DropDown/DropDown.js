import { format } from 'date-fns';

import s from './DropDown.module.css';

const myDate = new Date();
const formattedDate = format(myDate, 'dd.MM.yyyy');

const DropDown = ({ setSortDir }) => {
  return (
    <div className={s.dropdown_wrapper}>
      <p className={s.dropdown_text}>
        *Ціни та наявність актуальні на {formattedDate}
      </p>
      <select
        className={s.dropdown_select}
        onChange={e => setSortDir(e.target.value)}
      >
        <option value="default">за популярністю </option>
        <option value="lowtohigh">ціна: від дешевих </option>
        <option value="hightolow">ціна: від дорогих </option>
      </select>
    </div>
  );
};

export default DropDown;
