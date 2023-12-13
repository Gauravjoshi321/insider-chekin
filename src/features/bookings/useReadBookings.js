import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";


export default function useReadBookings() {
  const { data: bookings, error, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  })

  return { bookings, error, isLoading };
}