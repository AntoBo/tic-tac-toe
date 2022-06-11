import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./PlayCell.module.scss";

const PlayCell = ({ id, handleClick, value }) => {
  // const [value, setValue] = useState(" ");
  const [canClick, setCanClick] = useState(true);
  const cellSize = useSelector(
    (state) => 100 / Math.sqrt(state.game.fieldData.length)
  );
  // console.log("cellSize ", cellSize);

  const onClick = () => {
    if (!canClick) return;
    setCanClick(false);

    handleClick(id);
  };

  return (
    <li
      style={{ width: `${cellSize}%`, height: `${cellSize}%` }}
      className={s.cell}
      data-id={id}
      onClick={onClick}
    >
      {value}
    </li>
  );
};

export default PlayCell;
