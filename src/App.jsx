import "./App.css";
import Container from "./component/style/Container-style";
import Profile from "./component/Profile";
import styled, { ThemeProvider } from "styled-components";
import { TimeProvider } from "./component/Timecontext";
import GlobalStyle from "./component/style/GlobalStyle";
import Timecontainer from "./component/Timecontainer";

const theme = {
  colors: {
    Verydarkblue: "#0F1424",
    Darkblue: "#1C1F4A",
    Desaturatedblue: "#6F76C8",
    PaleBlue: "#BDC1FF",
    palebluedarker: "#A59CFF",
    primary: {
      blue: "#5847EB",
      Lightred: "#FF8C66",
      Softblue: "#56C2E6",
      Lightred_study: "#FF5C7C",
      Limegreen: "#4ACF81",
      Violet: "#7536D3",
      Softorange: "#F1C65B",
    },
  },
  fontsize: {
    sm: "16px",
    md: "18px",
    lg: "40px",
    xl: "56px",
  },
};

const Main = styled.main`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Verydarkblue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

function App() {
  return (
    <TimeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <Container>
            <Profile />
            <Timecontainer />
          </Container>
        </Main>
      </ThemeProvider>
    </TimeProvider>
  );
}

export default App;
