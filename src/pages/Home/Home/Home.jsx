import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import FeaturedSpecial from "../FeaturedSpecial/FeaturedSpecial";
import CallSection from "../CallSection/CallSection";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CafeResto | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Featured></Featured>
      <PopularMenu></PopularMenu>
      <CallSection></CallSection>
      <FeaturedSpecial></FeaturedSpecial>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
