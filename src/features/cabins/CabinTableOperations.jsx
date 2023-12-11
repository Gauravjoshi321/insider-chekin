import Filter from "../../ui/Filter";
import TableOperation from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperation>
      <Filter paramName="discount" options={[
        { value: "all", label: "All" },
        { value: "no-discount", label: "No Discount" },
        { value: "with-discount", label: "With Discount" },
      ]} />
    </TableOperation>
  )
}

export default CabinTableOperations;