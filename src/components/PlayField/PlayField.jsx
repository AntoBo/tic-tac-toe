import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { strikeCheck } from "../../logic/strikeCheck";
import {
  setTurnCount,
  setFieldData,
  setWinnerMark,
  incrementScore,
  initFieldData,
  resetTurnCount,
  setAngleRot,
  setWinID,
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
    dispatch(resetTurnCount());
    dispatch(setAngleRot(""));
    dispatch(setWinID(""));
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  };

  useEffect(() => {
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  }, [fieldSize, dispatch]);

  useEffect(() => {
    const [checkResp, angleRot, winID] = strikeCheck({
      fieldData,
      turnCount,
      clickedID,
    });

    switch (checkResp) {
      case "X":
        setModalText(player1Name + " wins!");
        dispatch(setWinnerMark(checkResp));
        dispatch(incrementScore("player1"));
        dispatch(setAngleRot(angleRot));
        dispatch(setWinID(winID));
        break;
      case "O":
        setModalText(player2Name + " wins!");
        dispatch(setWinnerMark(checkResp));
        dispatch(incrementScore("player2"));
        dispatch(setAngleRot(angleRot));
        dispatch(setWinID(winID));
        break;
      case "draw":
        dispatch(setWinnerMark(checkResp));
        setModalText("Its draw!");
        break;

      default:
        break;
    }
  }, [fieldData, turnCount, clickedID, dispatch]);

  return (
    <div className={s.container}>
      <ul className={s.field}>
        {fieldData.map((el, idx) => (
          <PlayCell key={idx} id={idx} handleClick={handleClick} />
        ))}
      </ul>
      {hasWinner && <Modal text={modalText} okHandle={okHandle} />}
    </div>
  );
};

export default PlayField;
