import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
// import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import styled, { css } from "styled-components";

const Row = styled.div`
${props => props.type === 'horizontal' && css`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`}

${props => props.type === 'vertical' && css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`}
`;

function Cabins() {

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row type="vertical">
        <CabinTable />

        <AddCabin />

        {/* <AddCabin opens="table" name="table" >
          <CabinTable />
        </AddCabin> */}
      </Row>

    </>
  );
}

export default Cabins;
