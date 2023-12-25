import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

function useLogout() {

  const navigate = useNavigate()

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login", { replace: true })
    },
  })

  return { logout, isLoading };
}

export default useLogout;