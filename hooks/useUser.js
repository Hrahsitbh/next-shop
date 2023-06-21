import { useQuery } from "react-query";
import { fetcher } from "../lib/apiUtils";

function useUser() {
  const query = useQuery(
    "user",
    async () => {
      try {
        const res = await fetcher("/api/user");
        return res;
      } catch {
        return undefined;
      }
    },
    {
      cacheTime: Infinity,
      staleTime: 30_000, // ms
      refetchOnWindowFocus: true,
    }
  );
  return query;
}

export default useUser;
