import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editMutate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),

    // Can also use this "onSuccess" property where we will call this mutation function---(like here in the form)
    onSuccess: () => {
      toast.success("Cabin has edited successfuly.");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      });
      // reset();
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })

  return { editMutate, isEditing };
}