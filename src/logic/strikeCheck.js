export const strikeCheck = ({ fieldData, turnCount, clickedID: id }) => {
  const rightSlashStep = Math.sqrt(fieldData.length) + 1;
  const leftSlashStep = Math.sqrt(fieldData.length) - 1;
  const vertStep = Math.sqrt(fieldData.length);
  const horizStep = 1;
  console.log("clickedID is", id);
  const stepCheck = (sideStep) => {
    if (fieldData[id] && fieldData[id + sideStep] && fieldData[id - sideStep]) {
      console.log("win");
    }
    if (
      fieldData[id] &&
      fieldData[id + sideStep] &&
      fieldData[id + sideStep * 2]
    ) {
      console.log("win");
    }
    if (
      fieldData[id] &&
      fieldData[id - sideStep] &&
      fieldData[id - sideStep * 2]
    ) {
      console.log("win");
    }
  };

  stepCheck(rightSlashStep);
  stepCheck(leftSlashStep);
  stepCheck(vertStep);
  stepCheck(horizStep);
};
