import toast from "react-hot-toast";

import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import useReadCabins from "./useReadCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";


function CabinTable() {

  const { cabins, error, isLoading } = useReadCabins();
  const [searchParams] = useSearchParams();

  const filterParam = searchParams.get("discount") || "all";

  // Filtering
  let filteredCabins;
  if (filterParam === "all") filteredCabins = cabins;
  if (filterParam === "with-discount") filteredCabins = cabins.filter(cabin => cabin.discount > 0);
  if (filterParam === "no-discount") filteredCabins = cabins.filter(cabin => cabin.discount === 0);

  // Sorting
  const sortParam = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortParam.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = filteredCabins?.sort((a, b) => (a[field] - b[field]) * modifier);


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
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />

      </Table>
    </Menus>
  )
}

export default CabinTable