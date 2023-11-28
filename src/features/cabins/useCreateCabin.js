import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createMutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,

    // Can also use this "onSuccess" property where we will call this mutation function---(like here in the form)
    onSuccess: () => {
      toast.success("New cabin created.");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      });
      // reset();
    },

    onError: (err) => {
      toast.error(err.message);
    }
  })

  return { createMutate, isCreating };
}