import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { strikeCheck } from "../../logic/strikeCheck";
import { setTurnCount, setFieldData } from "../../redux/game/gameSlice";
import PlayCell from "../PlayCell/PlayCell";
import s from "./PlayField.module.scss";

const PlayField = ({ fieldData }) => {
  const [clickedID, setClickedID] = useState(null);
  const dispatch = useDispatch();
  const turnCount = useSelector((state) => state.game.turnCount);

  const handleClick = (id) => {
    dispatch(setTurnCount());
    if (turnCount % 2 === 0) {
      dispatch(setFieldData({ mark: "X", idx: id }));
    } else {
      dispatch(setFieldData({ mark: "O", idx: id }));
    }
    setClickedID(id);
  };

  useEffect(() => {
    strikeCheck({ fieldData, turnCount, clickedID });
  }, [fieldData, turnCount, clickedID]);

  return (
    <ul className={s.field}>
      {fieldData.map((el, idx) => (
        <PlayCell
          key={idx}
          id={idx}
          handleClick={handleClick}
          value={fieldData[idx]}
        />
      ))}
    </ul>
  );
};

export default PlayField;
