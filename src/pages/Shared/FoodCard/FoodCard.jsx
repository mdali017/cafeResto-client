import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { json, useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [refetch] = useCart();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Order Added in the Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire(
        "Auththentication Need",
        "Please Login to order the food",
        "error"
      );
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Foods" />
        <p className="bg-slate-900  absolute right-10 top-4 px-5">
          <span className="text-orange-500"> ${price}</span>
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        {/* <div className="card-actions justify-end"> */}
        <div className="card-actions flex justify-center mt-7">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-orange-400  border-0 border-b-4"
          >
            Add To Cart
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default FoodCard;
