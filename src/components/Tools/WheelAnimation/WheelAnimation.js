function WheelAnimation(
  wheelY,
  scaleNum,
  setScaleNum,
  totalScaleNum,
  setTotalScaleNum,
  scaleLowThreshold,
  scaleHighThreshold,
  wheelSpeed,
  totalScaleLowThreshold,
  totalScaleHighThreshold,
  setAccessSecondPage
) {
  console.log("totlScaleNUm", totalScaleNum);
  if (
    totalScaleNum > totalScaleHighThreshold ||
    totalScaleNum < totalScaleLowThreshold
  ) {
    if (totalScaleNum > totalScaleHighThreshold && wheelY > 0) {
      if (totalScaleNum > 700) {
        setAccessSecondPage(true);
      }
    }
    if (totalScaleNum < totalScaleLowThreshold && wheelY < 0) {
      if (totalScaleNum < -600) {
        setAccessSecondPage(false);
      }
    }
  }

  if (wheelY > 300 || wheelY < -300) {
    return;
  }

  if (scaleNum < 1) {
    setScaleNum(1);
    return;
  }

  if (wheelY < 0) {
    wheelY = -wheelY;
    let ans = Math.ceil(wheelY / wheelSpeed) * 0.01;
    setScaleNum((n) =>
      n - ans < scaleLowThreshold ? scaleLowThreshold : n - ans
    );
    setTotalScaleNum((n) => n - wheelY);
    return;
  }

  if (wheelY > 0) {
    let ans = Math.ceil(wheelY / wheelSpeed) * 0.01;
    setScaleNum((n) =>
      ans + n > scaleHighThreshold ? scaleHighThreshold : ans + n
    );
    setTotalScaleNum((n) => n + wheelY);
  }
}

export default WheelAnimation;
