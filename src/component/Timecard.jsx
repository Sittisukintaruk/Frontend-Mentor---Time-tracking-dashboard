import React from "react";
import {
  Timecardstyle,
  Timecontent,
  Timeheadline,
  Timemenu,
  Timebox,
} from "./style/Timecard-style";
import { H3, Hrs, Subcontent } from "./style/Typography-style";
import menu from "../images/icon-ellipsis.svg";
import styled from "styled-components";

const TimeHrs = styled(Hrs)`
  margin-top: 10px;
`;

const Timecard = ({ bg, imgae, title, timeframes }) => {
  return (
    <Timecardstyle bg={bg} imgae={imgae}>
      <Timecontent>
        <Timeheadline>
          <H3>{title}</H3>
          <Timemenu width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill-rule="evenodd"
            />
          </Timemenu>
        </Timeheadline>
        <Timebox>
          <TimeHrs>{timeframes.current}hrs</TimeHrs>
          <Subcontent>Last Week - {timeframes.previous}hrs</Subcontent>
        </Timebox>
      </Timecontent>
    </Timecardstyle>
  );
};

export default Timecard;
