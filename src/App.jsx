import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/row";

const StyledApp = styled.div`
  /* background-color: red; */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row type="horizontal">

          <Row type="vertical">
            <Heading as='h1' color="orange">Hello World!</Heading>
            <Heading as='h2' color="blue">Hello World!</Heading>
            <Heading as='h3' >Hello World!</Heading>
          </Row>

          <Row type="horizontal">
            <Row type="vertical">
              <Button onClick={() => alert("this is alert")}>check in</Button>
              <Button onClick={() => alert("this is alert")}>check out</Button>
            </Row>

            <Row type="vertical">
              <input type="number" placeholder="type any number" />
              <input type="text" placeholder="type any text" />
            </Row>
          </Row>

        </Row>
      </StyledApp>
    </>
  )
}

export default App;