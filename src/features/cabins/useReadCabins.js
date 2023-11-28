import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";


export default function useReadCabins() {
  const { data: cabins, error, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  })

  return { cabins, error, isLoading };
}