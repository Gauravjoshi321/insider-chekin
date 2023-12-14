import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";


export default function useReadBookings() {

  const [searchParams] = useSearchParams();
  const statusParam = searchParams.get("status");

  const filterObj = !statusParam || statusParam === "all" ?
    null :
    { field: "status", value: statusParam };

  const { data: bookings, error, isLoading } = useQuery({
    queryKey: ["bookings", filterObj],
    queryFn: () => getBookings(filterObj),
  })

  return { bookings, error, isLoading };
}