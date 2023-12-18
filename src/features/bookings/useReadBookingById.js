import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";


export default function useReadBookingById() {
  const { bookingId } = useParams();

  const { data: booking, error, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false
  })

  return { booking, error, isLoading };
}