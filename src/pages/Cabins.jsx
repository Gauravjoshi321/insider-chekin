import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

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
