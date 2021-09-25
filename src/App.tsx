import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import Calculator from "./components/Calculator";
import { CustomThemeProvider } from "./styles/theme";

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Container>
        <Calculator />
      </Container>
    </CustomThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default App;
