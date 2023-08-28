import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("access-token");
  const {
    refetch,

    data: cart = [],
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,

    // queryFn: async () => {
    //   const data = await fetch(
    //     `https://awesome-restuarent-server.vercel.app/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return data.json();
    // },

    // ------

    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
