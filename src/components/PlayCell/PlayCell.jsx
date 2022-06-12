import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./PlayCell.module.scss";

const PlayCell = ({ id, handleClick, value }) => {
  const [mark, setMark] = useState("");
  const [canClick, setCanClick] = useState(true);
  const cellSize = useSelector(
    (state) => 100 / Math.sqrt(state.game.fieldData.length)
  );
  const turnCount = useSelector((state) => state.game.turnCount);

  const onClick = () => {
    if (!canClick) return;
    setCanClick(false);

    turnCount % 2 === 0 ? setMark("X") : setMark("O");

    //fire dispatches and logic
    handleClick(id);
  };

  return (
    <li
      style={{ width: `${cellSize}%`, height: `${cellSize}%` }}
      className={s["cell" + mark]}
      data-id={id}
      onClick={onClick}
    ></li>
  );
};

export default PlayCell;
