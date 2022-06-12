import { useSelector } from "react-redux";
import s from "./ScoreBoard.module.scss";

const ScoreBoard = () => {
  const { name: player1Name, score: player1Score } = useSelector(
    (state) => state.game.player1
  );
  const { name: player2Name, score: player2Score } = useSelector(
    (state) => state.game.player2
  );
  return (
    <>
      <h2>Score</h2>
      <p>
        {player1Name}: {player1Score}
      </p>
      <p>
        {player2Name}: {player2Score}
      </p>
    </>
  );
};

export default ScoreBoard;
