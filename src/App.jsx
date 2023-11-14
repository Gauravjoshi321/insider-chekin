import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";

const H1 = styled.h1`
font-size: 30px;
font-weight: 200;
`;

const StyledApp = styled.div`
  background-color: red;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <H1>Hello World!</H1>
        <Button onClick={() => alert("this is alert")}>check in</Button>
      </StyledApp>
    </>
  )
}

export default App;