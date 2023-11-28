import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editMutate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
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