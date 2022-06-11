import PlayCell from "../PlayCell/PlayCell";
import s from "./PlayField.module.scss";

const PlayField = ({ fieldData }) => {
  return (
    <ul>
      {fieldData.map((el, idx) => (
        <PlayCell key={idx} id={idx} />
      ))}
    </ul>
  );
};

export default PlayField;
