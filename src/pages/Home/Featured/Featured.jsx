import React from "react";

const Featured = () => {
  return (
    <div className="mb-10">
      <div
        className="hero md:w-[1100px] mx-auto md:h-[400px]"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:w-[940px] md:p-10 text-black bg-white rounded-lg">
            <h1 className="mb-5 text-5xl font-bold">Awesome Restuarant</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
