import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CreateCabinForm from "../features/cabins/CreateCabinForm";


function Cabins() {

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row type="vertical">
        <CabinTable />

        <AddCabin opens="cabin-form" name="cabin-form" >
          <CreateCabinForm />
        </AddCabin>

        {/* <AddCabin opens="table" name="table" >
          <CabinTable />
        </AddCabin> */}
      </Row>

    </>
  );
}

export default Cabins;
