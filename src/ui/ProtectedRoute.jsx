function ProtectedRoute({ children }) {

  // 1. Check for the user if it is Authenticated by checking the session created for the current client

  // 2. Load the Spinner while isLoading

  // 3. If not Authenticated then navigate the user to the login page

  // 4. If Authenticated then return the children

  return children
}

export default ProtectedRoute;