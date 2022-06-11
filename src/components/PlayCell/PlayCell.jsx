import { useState } from "react";
import s from "./PlayCell.module.scss";

const PlayCell = ({ id, handleClick, value }) => {
  // const [value, setValue] = useState(" ");
  const [canClick, setCanClick] = useState(true);

  const onClick = () => {
    if (!canClick) return;
    setCanClick(false);

    handleClick(id);
  };

  return (
    <li className={s.cell} data-id={id} onClick={onClick}>
      {value}
    </li>
  );
};

export default PlayCell;
