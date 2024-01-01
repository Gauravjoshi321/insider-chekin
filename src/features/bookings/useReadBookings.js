import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";


export default function useReadBookings() {

  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Filter
  const statusParam = searchParams.get("status");
  const filterObj = !statusParam || statusParam === "all" ? null : { field: "status", value: statusParam };

  // Sorting
  const sortParam = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortParam.split("-");
  const sortBy = { field, direction };
  console.log(sortBy);

  // Pagination
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));


  const { data: { data: bookings, count } = {}, error, isLoading } = useQuery({
    queryKey: ["bookings", filterObj, sortBy, currentPage],
    queryFn: () => getBookings(filterObj, sortBy, currentPage),
  })

  // Pre-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (currentPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterObj, sortBy, currentPage + 1],
      queryFn: () => getBookings(filterObj, sortBy, currentPage + 1),
    })
  }

  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterObj, sortBy, currentPage - 1],
      queryFn: () => getBookings(filterObj, sortBy, currentPage - 1),
    })
  }

  return { bookings, error, isLoading, count };
}