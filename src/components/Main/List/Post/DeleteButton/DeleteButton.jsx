import style from './DeleteButton.module.css';
import {ReactComponent as DeleteIcon} from './images/delete.svg';

export const DeleteButton = (props) => (
  <button className={style.delete}>
    <DeleteIcon />
  </button>
);
