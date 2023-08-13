import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>CafeResto | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle subTitle="Don't Miss" title="Todays Offers"></SectionTitle>
      {/* Offered Menu Item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert menu item */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* Pizzas menu item */}
      <MenuCategory
        items={pizza}
        title="Pizzas"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* Salads menu item */}
      <MenuCategory
        items={salad}
        title="Salads"
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
