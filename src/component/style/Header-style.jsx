import styled from "styled-components";
import { device } from "./device";

const Headerstyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 357px;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  border-radius: inherit;
  padding-top: 35px;
  padding-left: 29px;
  padding-right: 29px;

  @media ${device.tablet} {
    min-height: 133px;
    flex-direction: row;
    padding-top: 0;
    align-items: center;
  }
`;

const Profile__image = styled.div`
  width: 82px;
  height: 82px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
`;

const Headeprofile = styled.div`
  margin-top: 41px;

  @media ${device.tablet} {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

export { Headerstyle, Profile__image, Headeprofile };
