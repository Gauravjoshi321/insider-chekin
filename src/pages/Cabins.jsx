import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "./../features/cabins/CreateCabinForm"
import Modal from "../ui/Modal";

function Cabins() {


  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>

      {<Modal></Modal>}


    </>
  );
}

export default Cabins;
