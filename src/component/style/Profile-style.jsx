import styled from "styled-components";
import { device } from "./device";

const ProfileStyle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: span 2;
  background-color: ${({ theme }) => theme.colors.Darkblue};
  border-radius: 16px;

  @media ${device.laptop} {
    grid-row: span 3;
  }
  @media ${device.tablet} {
    grid-column-start: unset;
    grid-column-end: unset;
    grid-row: unset;
  }
`;

export default ProfileStyle;
