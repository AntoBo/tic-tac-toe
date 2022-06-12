import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container/Container";
import PlayField from "./components/PlayField/PlayField";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import { initFieldData } from "./redux/game/gameSlice";

function App() {
  const dispatch = useDispatch();
  const [fieldSize, setFieldSize] = useState(3);
  const fieldData = useSelector((state) => state.game.fieldData);
  const winner = useSelector((state) => state.game.winner);

  useEffect(() => {
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  }, []);

  useEffect(() => {
    if (winner) {
      console.log("we got a winner! ", winner);
    }
  }, [winner]);

  return (
    <Container>
      <PlayField fieldData={fieldData} />
      <ScoreBoard />
    </Container>
  );
}

export default App;
