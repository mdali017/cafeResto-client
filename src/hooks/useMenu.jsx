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
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });

  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(true);
  //     });
  // }, []);
  return [menu, refetch];
};

export default useMenu;
