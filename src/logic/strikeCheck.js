export const strikeCheck = ({ fieldData, turnCount, clickedID: id }) => {
  console.log("clickedID is", id);

  const step = {
    rightSlash: Math.sqrt(fieldData.length) + 1,
    leftSlash: Math.sqrt(fieldData.length) - 1,
    vert: Math.sqrt(fieldData.length),
    horiz: 1,
  };

  const playerMark = turnCount % 2 === 0 ? "O" : "X";
  console.log("playerMark is ", playerMark);

  const stepCheck = (sideStep) => {
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id - sideStep] === playerMark
    ) {
      console.log("WIN OF ", playerMark);
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id + sideStep * 2] === playerMark
    ) {
      console.log("WIN OF ", playerMark);
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id - sideStep] === playerMark &&
      fieldData[id - sideStep * 2] === playerMark
    ) {
      console.log("WIN OF ", playerMark);
    }
  };

  stepCheck(step.rightSlash);
  stepCheck(step.leftSlash);
  stepCheck(step.vert);
  stepCheck(step.horiz);
};
