import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container/Container";
import PlayField from "./components/PlayField/PlayField";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
// import { strikeCheck } from "./logic/strikeCheck";
import { initFieldData } from "./redux/game/gameSlice";

function App() {
  const dispatch = useDispatch();
  const [fieldSize, setFieldSize] = useState(3);
  const fieldData = useSelector((state) => state.game.fieldData);
  // const turnCount = useSelector((state) => state.game.turnCount);

  useEffect(() => {
    dispatch(initFieldData([...Array(fieldSize ** 2)].map((el) => "")));
  }, []);

  return (
    <Container>
      <PlayField fieldData={fieldData} />
      <ScoreBoard />
    </Container>
  );
}

export default App;
