import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectedRoute({ children }) {

  const navigate = useNavigate();

  // 1. Check for the user if it is Authenticated by checking the session created for the current client
  const { isLoading, isAuthenticated } = useUser();

  // 2. If not Authenticated then navigate the user to the login page
  useEffect(function () {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate])

  // 3. Load the Spinner while isLoading
  if (isLoading) return (
    <FullPage>
      <Spinner />
    </FullPage>
  )

  // // 4. If Authenticated then return the children
  if (isAuthenticated)
    return children;
}

export default ProtectedRoute;