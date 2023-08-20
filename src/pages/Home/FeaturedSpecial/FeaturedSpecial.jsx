import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const FeaturedSpecial = () => {
  return (
    <section
      className="hero mt-24 bg-fixed"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <SectionTitle
            subTitle="---Special Offer---"
            title="Limit Time Offer"
          ></SectionTitle>
          <div className="md:flex justify-center items-center p-6 gap-8">
            <div className="w-[50%] ">
              <img className="md:w-[400px] ml-auto" src={featuredImg} alt="" />
            </div>
            <div className="w-[50%] text-left">
              <h1 className=" text-xl font-bold">March 20, 2023</h1>
              <h1 className=" text-xl font-bold text-orange-300">
                WHERE CAN I GET SOME?
              </h1>
              <p className="mb-5">
                Provident cupiditate Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Error voluptate facere, deserunt dolores
                maiores quod nobis quas quasi. Eaque repellat recusandae ad
                laudantium tempore consequatur consequuntur omnis ullam maxime
                tenetur..
              </p>
              <div className=" ">
                <button className="btn btn-outline text-white  border-0 border-b-4">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpecial;
