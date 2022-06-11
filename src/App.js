import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import PlayField from "./components/PlayField/PlayField";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  const [fieldSize, setFieldSize] = useState(4);
  const [fieldData, setFieldData] = useState([]);
  const [turnCount, setTurnCount] = useState(0);

  useEffect(() => {
    setFieldData([...Array(fieldSize ** 2)].map((el) => ""));
  }, [fieldSize]);

  return (
    <Container>
      <PlayField fieldData={fieldData} />
      <ScoreBoard />
    </Container>
  );
}

export default App;
