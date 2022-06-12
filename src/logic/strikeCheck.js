import { useDispatch } from "react-redux";

export const strikeCheck = ({ fieldData, turnCount, clickedID: id }) => {
  //dont start calculate if turns are not enough
  if (turnCount < 5) {
    return;
  }
  let winner = "";
  //   const dispatch = useDispatch();
  console.log(fieldData);
  const step = {
    rightSlash: Math.sqrt(fieldData.length) + 1,
    leftSlash: Math.sqrt(fieldData.length) - 1,
    vert: Math.sqrt(fieldData.length),
    horiz: 1,
  };

  const playerMark = turnCount % 2 === 0 ? "O" : "X";

  const stepCheck = (sideStep) => {
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id - sideStep] === playerMark
    ) {
      winner = playerMark;
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id + sideStep * 2] === playerMark
    ) {
      winner = playerMark;
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id - sideStep] === playerMark &&
      fieldData[id - sideStep * 2] === playerMark
    ) {
      winner = playerMark;
    }
  };

  stepCheck(step.rightSlash);
  stepCheck(step.leftSlash);
  stepCheck(step.vert);
  stepCheck(step.horiz);

  if (winner) {
    return winner;
  }
};
