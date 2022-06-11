import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container/Container";
import PlayField from "./components/PlayField/PlayField";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import { initFieldData } from "./redux/game/gameSlice";

function App() {
  const dispatch = useDispatch();
  const [fieldSize, setFieldSize] = useState(4);
  const fieldData = useSelector((state) => state.game.fieldData);

  // const [turnCount, setTurnCount] = useState(0);

  useEffect(() => {
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  }, [fieldSize, dispatch]);

  return (
    <Container>
      <PlayField fieldData={fieldData} />
      <ScoreBoard />
    </Container>
  );
}

export default App;
