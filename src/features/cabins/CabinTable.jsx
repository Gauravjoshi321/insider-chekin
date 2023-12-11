import styled from "styled-components";
import toast from "react-hot-toast";

import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import useReadCabins from "./useReadCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {

  const { cabins, error, isLoading } = useReadCabins();
  const [searchParams] = useSearchParams();

  const filterParam = searchParams.get("discount") || "all";
  console.log(filterParam);

  let filteredCabins;
  if (filterParam === "all") filteredCabins = cabins;
  if (filterParam === "with-discount") filteredCabins = cabins.filter(cabin => cabin.discount > 0);
  if (filterParam === "no-discount") filteredCabins = cabins.filter(cabin => cabin.discount === 0);

  if (isLoading) return <Spinner />;
  if (error) return toast.error("Could not find the data.");

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">

        <Table.Header role="row">
          <div></div>
          <div>cabin</div>
          <div>capacity</div>
          <div>price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />

      </Table>
    </Menus>
  )
}

export default CabinTable