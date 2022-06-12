export const strikeCheck = ({ fieldData, turnCount, clickedID: id }) => {
  //dont start calculate if turns are not enough
  //   if (turnCount < 5) {
  //     return;
  //   }
  let winnerMark = "";
  const fieldSize = Math.sqrt(fieldData.length);
  const playerMark = turnCount % 2 === 0 ? "O" : "X";
  const step = {
    rightSlash: fieldSize + 1,
    leftSlash: fieldSize - 1,
    vert: fieldSize,
    horiz: 1,
  };

  const stepCheck = (sideStep, rotateAngle) => {
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id - sideStep] === playerMark
    ) {
      winnerMark = playerMark;
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id + sideStep * 2] === playerMark
    ) {
      winnerMark = playerMark;
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id - sideStep] === playerMark &&
      fieldData[id - sideStep * 2] === playerMark
    ) {
      winnerMark = playerMark;
    }
  };
  const getRow = (id) => {
    return (id - (id % fieldSize)) / fieldSize;
  };

  const rowsMatchCheck = (sideStep) => {
    let match = "";
    if (
      getRow(id) === getRow(id + sideStep) &&
      getRow(id + sideStep) === getRow(id - sideStep)
    ) {
      match = true;
      //   console.log("getRow(id) ", getRow(id));
      console.log("match 1", match);
    }
    if (
      getRow(id) === getRow(id + sideStep) &&
      getRow(id + sideStep) === getRow(id + sideStep * 2)
    ) {
      match = true;
      console.log("match 2", match);
    }
    if (
      getRow(id) === getRow(id - sideStep) &&
      getRow(id - sideStep) === getRow(id - sideStep * 2)
    ) {
      match = true;
      console.log("match 3", match);
    }
    return match;
  };

  stepCheck(step.rightSlash, -45);
  stepCheck(step.leftSlash, 45); //check if all are in DIFF row
  stepCheck(step.vert, 0);
  rowsMatchCheck(step.horiz, 90) && stepCheck(step.horiz); //check if all are in SAME row

  if (winnerMark) {
    return winnerMark;
  } else {
    checkDraw(fieldData);
  }
};

const checkDraw = (fieldData) => {
  const filledFieldData = fieldData.filter((el) => Boolean(el));
  if (filledFieldData.leigth === fieldData.length) {
    return "draw";
  }
};
