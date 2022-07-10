import styled from "styled-components";
import { device } from "./device";

const Container = styled.div`
  width: 1112px;
  min-height: 518px;
  max-width: 100%;
  /* outline: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 28px;
  padding-inline: 10px;

  @media ${device.laptop} {
    grid-template-columns: repeat(9, 1fr);
    padding-bottom: 1rem;
    min-height: 80%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    min-height: autp;
    gap: 23px;
    overflow: auto;
  }
`;

export default Container;
