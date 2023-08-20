import React from "react";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const ChefRecommends = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        subTitle="Should Try"
        title="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-4 gap-10">
        {popular.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
