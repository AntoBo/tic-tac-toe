import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setPlayersNames } from "../../redux/game/gameSlice";
import s from "./InviteForm.module.scss";

const InviteForm = () => {
  const dispatch = useDispatch();
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [fieldSize, setFieldSize] = useState(3);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "player1Name":
        setPlayer1Name(value);
        break;
      case "player2Name":
        setPlayer2Name(value);
        break;
      case "fieldSize":
        setFieldSize(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setPlayersNames({
        player1: { name: player1Name, score: 0 },
        player2: { name: player2Name, score: 0 },
        fieldSize: Number(fieldSize),
      })
    );
    // console.log("handleSubmit");
  };

  useEffect(() => {
    //reset from on mount
    setPlayer1Name("");
    setPlayer2Name("");
    setFieldSize(3);
  }, []);
  return createPortal(
    <div className={s.overlay}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h1>Tic tac toe</h1>
        <label>
          Player 1 name:
          <input
            className={s.input}
            type="text"
            name="player1Name"
            placeholder="Cross"
            value={player1Name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Player 2 name:
          <input
            className={s.input}
            type="text"
            name="player2Name"
            placeholder="Ring"
            value={player2Name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Field size:
          <input
            className={s.input}
            type="number"
            name="fieldSize"
            placeholder="Опис товару"
            value={fieldSize}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Start!</button>
      </form>
    </div>,
    document.getElementById("form")
  );
};

export default InviteForm;
