import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container/Container";
import InviteForm from "./components/InviteForm/InviteForm";
import Modal from "./components/Modal/Modal";
import PlayField from "./components/PlayField/PlayField";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import { initFieldData } from "./redux/game/gameSlice";

function App() {
  const dispatch = useDispatch();
  // const [fieldSize, setFieldSize] = useState(3);
  const fieldSize = useSelector((state) => state.game.fieldSize);
  const fieldData = useSelector((state) => state.game.fieldData);
  const winner = useSelector((state) => state.game.winner);
  const player1HasName = useSelector((state) =>
    Boolean(state.game.player1.name)
  );

  useEffect(() => {
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  }, [fieldSize]);

  useEffect(() => {
    if (winner) {
      console.log("we got a winner! ", winner);
    }
  }, [winner]);

  return (
    <>
      {player1HasName ? (
        <Container>
          <PlayField fieldData={fieldData} />
          <ScoreBoard />
        </Container>
      ) : (
        <InviteForm />
      )}
      {winner && <Modal text={`Winner is ${winner}!`} />}
    </>
  );
}

export default App;
