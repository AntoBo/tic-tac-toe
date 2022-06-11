import { useState } from "react";
import s from "./PlayCell.module.scss";

const PlayCell = ({ id }) => {
  const [canClick, setCanClick] = useState(true);
  const [value, setValue] = useState(" ");
  const handleClick = (e) => {
    if (!canClick) return;
    console.log("click on", e.target.dataset.id);
    setValue("X");
    setCanClick(false);
  };
  return (
    <li className={s.cell} data-id={id} onClick={handleClick}>
      {value}
    </li>
  );
};

export default PlayCell;
