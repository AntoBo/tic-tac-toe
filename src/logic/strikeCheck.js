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

  const stepCheck = (sideStep, matchCondition) => {
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id - sideStep] === playerMark
    ) {
      if (
        rowCheck(getRow(id), getRow(id + sideStep), getRow(id - sideStep)) ===
        matchCondition
      ) {
        winnerMark = playerMark;
      }
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id + sideStep] === playerMark &&
      fieldData[id + sideStep * 2] === playerMark
    ) {
      if (
        rowCheck(
          getRow(id),
          getRow(id + sideStep),
          getRow(id + sideStep * 2)
        ) === matchCondition
      ) {
        winnerMark = playerMark;
      }
    }
    if (
      fieldData[id] === playerMark &&
      fieldData[id - sideStep] === playerMark &&
      fieldData[id - sideStep * 2] === playerMark
    ) {
      if (
        rowCheck(
          getRow(id),
          getRow(id - sideStep),
          getRow(id - sideStep * 2)
        ) === matchCondition
      ) {
        winnerMark = playerMark;
      }
    }
  };
  const getRow = (id) => {
    return (id - (id % fieldSize)) / fieldSize;
  };
  const rowCheck = (a, b, c) => {
    if (a === b && b === c) {
      return "all";
    }
    if (a !== b && b !== c && a !== c) {
      return "none";
    }

    return "misc";
  };

  //check if all are in DIFF row
  stepCheck(step.rightSlash, "none");
  stepCheck(step.leftSlash, "none");
  stepCheck(step.vert, "none");
  //check if all are in SAME row
  stepCheck(step.horiz, "all");

  if (winnerMark) {
    return winnerMark;
  } else {
    return checkDraw(fieldData);
  }
};

const checkDraw = (fieldData) => {
  const filledFieldData = fieldData.filter((el) => Boolean(el));
  if (filledFieldData.length === fieldData.length) {
    return "draw";
  }
};
