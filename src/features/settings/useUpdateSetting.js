import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSettingApi } from "../../services/apiSettings";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,

    onSuccess: () => {
      toast.success("setting updated successfuly.");
      queryClient.invalidateQueries({
        queryKey: ["settings"]
      });
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })

  return { updateSetting, isUpdating };
}