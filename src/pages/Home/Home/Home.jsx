import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import FeaturedSpecial from "../FeaturedSpecial/FeaturedSpecial";
import CallSection from "../CallSection/CallSection";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
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
