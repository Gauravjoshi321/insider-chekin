import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UpdateCurrentUser } from "../../services/apiAuthentication";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateCurrentUser,

    // Can also use this "onSuccess" property where we will call this mutation function---(like here in the form)
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