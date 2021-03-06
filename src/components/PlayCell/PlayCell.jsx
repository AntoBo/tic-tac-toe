import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./PlayCell.module.scss";

const PlayCell = ({ id, handleClick }) => {
  const [styleMark, setStyleMark] = useState("");
  const [styleWinMark, setStyleWinMark] = useState("");
  const [canClick, setCanClick] = useState(true);
  const cellSize = useSelector(
    (state) =>
      (100 - Math.sqrt(state.game.fieldData.length) * 2) /
      Math.sqrt(state.game.fieldData.length)
  );
  const turnCount = useSelector((state) => state.game.turnCount);
  const winnerMark = useSelector((state) => state.game.winnerMark);
  const winID = useSelector((state) => state.game.winID);
  const angleRot = useSelector((state) => state.game.angleRot);

  const onClick = () => {
    if (!canClick) return;
    setCanClick(false);

    turnCount % 2 === 0 ? setStyleMark("X") : setStyleMark("O");

    //dispatches and logic
    handleClick(id);
  };

  useEffect(() => {
    if (!winnerMark) {
      setStyleMark("");
      setStyleWinMark("");
      setCanClick(true);
    } else {
      if (winID === id) {
        setStyleWinMark("win");
      }
    }
  }, [winnerMark]);

  return (
    <li
      style={{ width: `${cellSize}%`, height: `${cellSize}%` }}
      className={`${s.cell} ${styleMark && s[styleMark]} ${
        styleWinMark && s[styleWinMark]
      } ${angleRot && s[angleRot]}`}
      data-id={id}
      onClick={onClick}
    ></li>
  );
};

export default PlayCell;
