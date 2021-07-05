function TextOpacityAnimation(
  wheelY_background,
  scaleNum_background,
  OpacityNum,
  setOpacityNum
) {
  if (OpacityNum > 1) {
    if (wheelY_background > 0) {
      return;
    }
  }

  if (scaleNum_background < 1.2) {
    setOpacityNum(0);
  }

  if (wheelY_background < 0) {
    let decreaseOpacity = (scaleNum_background - 1.2) * 0.01;
    setOpacityNum((n) => n - decreaseOpacity);
  }
  if (scaleNum_background > 1.2 && wheelY_background > 0) {
    let increaseOpacity = (scaleNum_background - 1.2) * 0.4;
    setOpacityNum((n) => n + increaseOpacity);
  }
}

export default TextOpacityAnimation;
