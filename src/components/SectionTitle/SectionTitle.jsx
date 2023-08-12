import React from "react";

const SectionTitle = ({ subTitle, title, para }) => {
  return (
    <div className="text-center">
      <h4 className="uppercase text-[15px] tracking-[2px] font-sans font-semibold text-orange-500">
        {subTitle}
      </h4>
      <h2 className="text-[30px] font-bold ">{title}</h2>
      <p className="md:w-[700px] mx-auto text-[#828282] font-serif mt-5">
        {para}
      </p>
    </div>
  );
};

export default SectionTitle;
