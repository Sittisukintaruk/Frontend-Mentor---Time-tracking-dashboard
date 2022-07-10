import styled from "styled-components";
import { device } from "./device";

const Hrs = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontsize.xl};
  font-weight: 300;
  color: white;

  
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const Subcontent = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontsize.sm};
  color: ${({ theme }) => theme.colors.PaleBlue} ;
  font-weight: 300;
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontsize.lg};
  font-weight: 300;
  color: white;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontsize.md};
  font-weight: 500;
  color: white;
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontsize.sm};
  font-weight: 400;

  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export { H4, H2, H3, Hrs, Subcontent };
