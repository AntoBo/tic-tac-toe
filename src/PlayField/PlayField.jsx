import PlayCell from "../PlayCell/PlayCell";
import s from "./PlayField.module.scss";

const PlayField = ({ fieldSize }) => {
  return (
    <ul>
      {fieldSize.map((el, idx) => (
        <PlayCell key={idx} value="" />
      ))}
    </ul>
  );
};

export default PlayField;
