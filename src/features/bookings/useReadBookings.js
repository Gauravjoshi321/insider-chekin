import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";


export default function useReadBookings() {

  const [searchParams] = useSearchParams();

  // Filter
  const statusParam = searchParams.get("status");
  const filterObj = !statusParam || statusParam === "all" ? null : { field: "status", value: statusParam };

  // Sorting
  const sortParam = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortParam.split("-");
  const sortBy = { field, direction };

  const { data: { data: bookings, count } = {}, error, isLoading } = useQuery({
    queryKey: ["bookings", filterObj, sortBy],
    queryFn: () => getBookings(filterObj, sortBy),
  })

  return { bookings, error, isLoading, count };
}