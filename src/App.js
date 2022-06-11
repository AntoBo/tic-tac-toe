import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container/Container";
import PlayField from "./PlayField/PlayField";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

function App() {
  const [fieldSize, setFieldSize] = useState(3);
  const [fieldData, setFieldData] = useState([]);
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
