import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        "https://awesome-restuarent-server.vercel.app/menu"
      );
      return res.json();
    },
  });

  return [menu, refetch];
};

export default useMenu;
