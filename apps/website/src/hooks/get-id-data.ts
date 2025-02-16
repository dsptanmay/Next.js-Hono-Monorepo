import { useQuery } from "@tanstack/react-query";

export const useGetIdData = (id: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: [{ id }],
    queryFn: async () => {},
  });
};
