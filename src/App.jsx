import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  /* background-color: red; */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>

        <Heading as='h1' color="orange">Hello World!</Heading>
        <Heading as='h2' color="blue">Hello World!</Heading>
        <Heading as='h3' color="green">Hello World!</Heading>

        <Button onClick={() => alert("this is alert")}>check in</Button>
        <Button onClick={() => alert("this is alert")}>check out</Button>

        <input type="number" placeholder="type any number" />
        <input type="text" placeholder="type any text" />
      </StyledApp>
    </>
  )
}

export default App;