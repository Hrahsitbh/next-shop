import { useMutation, useQueryClient } from "react-query";
import { fetcher } from "../lib/apiUtils";

function useSignIn() {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError } = useMutation(
    ({ email, password }) =>
      fetcher("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  );
  return {
    signIn: async (email, password) => {
      try {
        const user = await mutateAsync({ email, password });
        queryClient.setQueryData("user", user);
        return true;
      } catch (error) {
        return false;
      }
    },
    isLoading,
    isError,
  };
}

export default useSignIn;
