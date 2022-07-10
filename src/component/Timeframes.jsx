import { useContext } from "react";
import styled from "styled-components";
import TimeContext from "./Timecontext";
import { device } from "./style/device";

const Wrapper = styled.div`
  padding-top: 22px;
  padding-left: 30px;
  padding-bottom: 22px;
  padding-right: 30px;
`;

const Lists = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 18px;
  color: ${({ theme }) => theme.colors.Desaturatedblue};
  font-size: ${({ theme }) => theme.fontsize.md};
  font-weight: 400;

  @media ${device.tablet} {
    flex-direction: row;
    padding-right: 30px;
    justify-content: space-between;
    
  }
`;

const List = styled.li``;

const Textlink = styled.span`
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
  }

  &.active {
    color: white;
  }
`;

const Timeframes = () => {
  const { timeFrames, setTimeFremesbyinput } = useContext(TimeContext);

  return (
    <Wrapper>
      <Lists>
        <List>
          <Textlink
            className={timeFrames === "daily" ? "active" : ""}
            onClick={() => {
              setTimeFremesbyinput("daily");
            }}
          >
            Daily
          </Textlink>
        </List>
        <List>
          <Textlink
            className={timeFrames === "weekly" ? "active" : ""}
            onClick={() => {
              setTimeFremesbyinput("weekly");
            }}
          >
            Weekly
          </Textlink>
        </List>
        <List>
          <Textlink
            className={timeFrames === "monthly" ? "active" : ""}
            onClick={() => {
              setTimeFremesbyinput("monthly");
            }}
          >
            Monthly
          </Textlink>
        </List>
      </Lists>
    </Wrapper>
  );
};

export default Timeframes;
