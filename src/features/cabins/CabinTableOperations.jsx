import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperation from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperation>

      {/* Filter */}
      <Filter paramName="discount" options={[
        { value: "all", label: "All" },
        { value: "no-discount", label: "No Discount" },
        { value: "with-discount", label: "With Discount" },
      ]} />

      {/* Sort */}
      <SortBy paramName="sortBy" options={[
        { value: "name-asc", label: "Sort by name(A-Z)" },
        { value: "name-des", label: "Sort by name(Z-A)" },
        { value: "regularPrice-asc", label: "Sort by Price(low first)" },
        { value: "regularPrice-des", label: "Sort by Price(high first)" },
        { value: "maxCapacity-asc", label: "Sort by Capacity(low first)" },
        { value: "maxCapacity-des", label: "Sort by Capacity(high first)" },
      ]} />

    </TableOperation>
  )
}

export default CabinTableOperations;