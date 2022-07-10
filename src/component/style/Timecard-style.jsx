import styled from "styled-components";
import { device } from "./device";

const Timecardstyle = styled.div`
  background-color: ${(props) => props.bg || "palevioletred"};
  background-image: url(${(props) => props.imgae || ""});
  background-repeat: no-repeat;
  background-position: top -12px right 24px;
  grid-column: span 3;
  border-radius: 20px;
  padding-top: 40px;

  @media ${device.tablet} {
    grid-column: unset;
  }
`;

const Timecontent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.Darkblue};
  height: 100%;
  padding-top: 32px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;

  @media ${device.laptop} {
    padding-top: 25px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Timeheadline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Timemenu = styled.svg`
  cursor: pointer;
  fill: #BBC0FF;

  &:hover {
    fill: white;
  }
`;

const Timebox = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export { Timecardstyle, Timecontent, Timeheadline, Timemenu, Timebox };
