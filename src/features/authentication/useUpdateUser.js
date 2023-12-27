import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UpdateCurrentUser } from "../../services/apiAuthentication";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateCurrentUser,

    onSuccess: () => {
      toast.success("User details has been updated successfuly.");
      queryClient.invalidateQueries({
        queryKey: ["user"]
      });
      // reset();
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })

  return { updateUser, isUpdating };
}