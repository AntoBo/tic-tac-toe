import { useState } from "react";
import s from "./PlayCell.module.scss";

const PlayCell = ({ id }) => {
  const [value, setValue] = useState(" ");
  const handleClick = (e) => {
    console.log("click on", e.target.dataset.id);
    setValue("x");
  };
  return (
    <li data-id={id} onClick={handleClick}>
      {value}
    </li>
  );
};

export default PlayCell;
