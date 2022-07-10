import React from "react";
import {
  Headerstyle,
  Profile__image,
  Headeprofile,
} from "./style/Header-style";
import { H4, H2 } from "./style/Typography-style";
import jeremy from "../images/image-jeremy.png";
import styled from "styled-components";

const ProfileH4 = styled(H4)`
  color: ${({ theme }) => theme.colors.palebluedarker};
`;

const Header = () => {
  return (
    <Headerstyle>
      <Profile__image>
        <img src={jeremy} alt="jeremy" className="img--round" />
      </Profile__image>
      <Headeprofile>
        <ProfileH4>Report for</ProfileH4>
        <H2>Jeremy Robson</H2>
      </Headeprofile>
    </Headerstyle>
  );
};

export default Header;
