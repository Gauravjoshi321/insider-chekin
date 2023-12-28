import { subDays } from "date-fns/esm";
import { useSearchParams } from "react-router-dom";

function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
  const queryDays = subDays(new Date(), numDays).toISOString();
}