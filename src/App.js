import { useSelector } from "react-redux";
import Container from "./components/Container/Container";
import InviteForm from "./components/InviteForm/InviteForm";

import PlayField from "./components/PlayField/PlayField";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  const player1HasName = useSelector((state) =>
    Boolean(state.game.player1.name)
  );
  const fieldData = useSelector((state) => state.game.fieldData);

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
    </>
  );
}

export default App;
