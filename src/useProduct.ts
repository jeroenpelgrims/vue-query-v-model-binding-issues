import { useQuery } from "@tanstack/vue-query";

export type Product = {
  id: string;
  name: string;
};

export default function useProduct() {
  return useQuery<Product>({
    queryKey: ["product"],
    queryFn: async () => {
      return {
        id: crypto.randomUUID(),
        name: `Jar of Speculaas`,
      };
    },
  });
}
