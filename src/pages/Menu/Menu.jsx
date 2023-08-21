import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const top6Desserts = desserts.slice(0, 6);
  const soup = menu.filter((item) => item.category === "soup");
  const top6Soup = soup.slice(0, 6);
  const salad = menu.filter((item) => item.category === "salad");
  const top6Salad = salad.slice(0, 6);
  const pizza = menu.filter((item) => item.category === "pizza");
  const top6Pizza = pizza.slice(0, 6);
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
        items={top6Desserts}
        title="dessert"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* Pizzas menu item */}
      <MenuCategory
        items={top6Pizza}
        title="pizzas"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* Salads menu item */}
      <MenuCategory
        items={top6Salad}
        title="salads"
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={top6Soup}
        title="soup"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
