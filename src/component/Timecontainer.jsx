import React, {useContext } from "react";
import Timecard from "./Timecard";
import {
  worksvg,
  studysvg,
  socialsvg,
  playsvg,
  exercisesvg,
  selfcaresvg,
} from "./Svgindex";
import data from "../data.json";
import TimeContext from "./Timecontext";

const [work, play, study, exercise, social, selfcare] = data;

const Timecontainer = () => {
  const { timeFrames } = useContext(TimeContext);

  
  const setObjectData = (value) => {
    let newobjest = {};
    switch (timeFrames) {
      case "daily": {
        newobjest = value.timeframes.daily;
        return newobjest;
      }
      case "weekly": {
        newobjest = value.timeframes.weekly;
        return newobjest;
      }
      case "monthly": {
        newobjest = value.timeframes.monthly;
        return newobjest;
      }

      default:
        break;
    }
  };

  return (
    <>
      <Timecard
        bg="#FF8C66"
        imgae={worksvg}
        title={work.title}
        timeframes={setObjectData(work)}
      />
      <Timecard bg="#56C2E6" imgae={playsvg} title={play.title}   timeframes={setObjectData(play)} />
      <Timecard bg="#FF5C7C" imgae={studysvg} title={study.title}   timeframes={setObjectData(study)}/>
      <Timecard bg="#4ACF81" imgae={exercisesvg} title={exercise.title}   timeframes={setObjectData(exercise)}/>
      <Timecard bg="#7536D3" imgae={socialsvg} title={social.title}   timeframes={setObjectData(social)}/>
      <Timecard bg="#F1C65B" imgae={selfcaresvg} title={selfcare.title}   timeframes={setObjectData(selfcare)}/>
    </>
  );
};

export default Timecontainer;
