import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { strikeCheck } from "../../logic/strikeCheck";
import {
  setTurnCount,
  setFieldData,
  setWinnerMark,
  incrementScore,
  initFieldData,
} from "../../redux/game/gameSlice";
import Modal from "../Modal/Modal";
import PlayCell from "../PlayCell/PlayCell";
import s from "./PlayField.module.scss";

const PlayField = ({ fieldData }) => {
  const dispatch = useDispatch();
  const fieldSize = useSelector((state) => state.game.fieldSize);
  const turnCount = useSelector((state) => state.game.turnCount);
  const player1Name = useSelector((state) => state.game.player1.name);
  const player2Name = useSelector((state) => state.game.player2.name);
  const hasWinner = useSelector((state) => Boolean(state.game.winnerMark));

  const [modalText, setModalText] = useState("");
  const [clickedID, setClickedID] = useState(null);

  const handleClick = (id) => {
    dispatch(setTurnCount());
    if (turnCount % 2 === 0) {
      dispatch(setFieldData({ mark: "X", idx: id }));
    } else {
      dispatch(setFieldData({ mark: "O", idx: id }));
    }
    setClickedID(id);
  };

  const okHandle = () => {
    dispatch(setWinnerMark(""));
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  };

  useEffect(() => {
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  }, [fieldSize, dispatch]);

  useEffect(() => {
    const checkResp = strikeCheck({ fieldData, turnCount, clickedID });

    if (checkResp) {
      dispatch(setWinnerMark(checkResp));
    }

    switch (checkResp) {
      case "X":
        setModalText(player1Name + " wins!");
        dispatch(incrementScore("player1"));
        break;
      case "O":
        setModalText(player2Name + " wins!");
        dispatch(incrementScore("player2"));
        break;
      case "draw":
        setModalText("Its draw!");
        break;

      default:
        break;
    }
  }, [fieldData, turnCount, clickedID, dispatch]);

  return (
    <>
      <ul className={s.field}>
        {fieldData.map((el, idx) => (
          <PlayCell
            key={idx}
            id={idx}
            handleClick={handleClick}
            // value={fieldData[idx]}
          />
        ))}
      </ul>
      {hasWinner && <Modal text={modalText} okHandle={okHandle} />}
    </>
  );
};

export default PlayField;
