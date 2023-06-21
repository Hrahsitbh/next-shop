import { useMutation, useQueryClient } from "react-query";
import { fetcher } from "../lib/apiUtils";

function useSignOut() {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError } = useMutation(() => {
    fetcher("/api/logout");
  });
  return async () => {
    try {
      await mutateAsync();
      queryClient.setQueryData("user", undefined);
    } catch (error) {}
  };
}

export default useSignOut;
