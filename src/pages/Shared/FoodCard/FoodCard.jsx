import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
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
          <button className="btn btn-outline border-orange-400  border-0 border-b-4">
            Add To Cart
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default FoodCard;
