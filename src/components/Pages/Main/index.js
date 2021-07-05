import React, { useEffect, useState } from "react";
import island from "@Assets/Main/island.JPG";
import background from "@Assets/Main/background.png";
import WheelAnimation from "@Components/Tools/WheelAnimation/WheelAnimation";
import TextOpacityAnimation from "@Components/Tools/TextOpacityAnimation/TextOpacityAnimation";
import Nav from "@Components/Widgets/Nav/Nav";
import Secondpage from "@Components/Widgets/SecondPage/SecondPage";
import "./index.css";

function Main() {
  //wheel animation (useState)
  let [wheelY_island, setwheelY_island] = useState(0);
  let [scaleNum_island, setScaleNum_island] = useState(1);
  let [totalScaleNum_island, setTotalScaleNum_island] = useState(0);

  let [wheelY_background, setwheelY_background] = useState(0);
  let [scaleNum_background, setScaleNum_background] = useState(1);
  let [totalScaleNum_background, setTotalScaleNum_background] = useState(0);
  //end

  //Text Opacity
  let [opacityNum, setOpacityNum] = useState(0);
  //image Opacity
  let [imgOpacity, setImageOpacity] = useState(null);

  //end

  //second page

  let [accessSecondpage, setAccessSecondPage] = useState(false);
  console.log("accessSecondpage", accessSecondpage);

  console.log("totalScaleNUm_background", totalScaleNum_background);
  //wheel animation (variables)
  let scaleLowThreshold_island = 1;
  let scaleHighThreshold_island = 1.3;
  let wheelSpeed_island = 4;
  let totalScaleLowThreshold_island = -150;
  let totalScaleHighThreshold_island = 150;

  let scaleLowThreshold_background = 1;
  let scaleHighThreshold_background = 5;
  let wheelSpeed_background = 1;
  let totalScaleLowThreshold_background = -600;
  let totalScaleHighThreshold_background = 700;
  //end
  useEffect(() => {
    WheelAnimation(
      wheelY_island,
      scaleNum_island,
      setScaleNum_island,
      totalScaleNum_island,
      setTotalScaleNum_island,
      scaleLowThreshold_island,
      scaleHighThreshold_island,
      wheelSpeed_island,
      totalScaleLowThreshold_island,
      totalScaleHighThreshold_island,
      setAccessSecondPage
    );

    WheelAnimation(
      wheelY_background,
      scaleNum_background,
      setScaleNum_background,
      totalScaleNum_background,
      setTotalScaleNum_background,
      scaleLowThreshold_background,
      scaleHighThreshold_background,
      wheelSpeed_background,
      totalScaleLowThreshold_background,
      totalScaleHighThreshold_background,
      setAccessSecondPage
    );
    TextOpacityAnimation(
      wheelY_background,
      scaleNum_background,
      opacityNum,
      setOpacityNum
    );
  }, [wheelY_island, wheelY_background]);

  let handleOnWheel = (e) => {
    setwheelY_island(e.deltaY);
    setwheelY_background(e.deltaY);
  };

  useEffect(() => {
    if (totalScaleNum_background > 400) {
      if (totalScaleNum_background > 700) {
        setImageOpacity(0);
        return;
      }
      let increaseOpacity = (totalScaleNum_background - 400) * 0.3;
      setImageOpacity(() => 100 - increaseOpacity);
    }
    if (totalScaleNum_background < 400) {
      setImageOpacity(100);
      return;
    }
  }, [totalScaleNum_background]);

  return (
    <div>
      <div className="main" onWheel={(e) => handleOnWheel(e)}>
        <div
          style={{
            backgroundColor: "black",
            position: "relative",
            zIndex: "100000",
            width: "100%",
            height: "100vh",
          }}
        >
          <img
            className="main_img_background"
            src={background}
            style={{
              transform: `scale(${scaleNum_background})`,
              opacity: `${imgOpacity}%`,
            }}
          />
          <img
            className="main_img_island"
            src={island}
            style={{
              transform: `scale(${scaleNum_island})`,
              opacity: `${imgOpacity}%`,
            }}
          />
        </div>
        <Nav
          wheelY={wheelY_background}
          scaleNum={scaleNum_background}
          opacityNum={opacityNum}
          setOpacityNum={setOpacityNum}
        />
      </div>
      {accessSecondpage ? <Secondpage /> : null}
    </div>
  );
}

export default Main;
