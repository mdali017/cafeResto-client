import React from "react";

const SectionTitle = ({ subTitle, title, para }) => {
  return (
    <div className="text-center mt-28 mb-20">
      <h4 className="uppercase text-[15px] tracking-[2px] font-sans font-semibold text-orange-500">
        {subTitle}
      </h4>
      <h2 className="text-[30px] font-bold ">
        <div className="divider w-[300px] mb-0 mx-auto"></div>
        {title}
      </h2>
      <div className="divider w-[300px] mt-0 mx-auto"></div>
      <p className="md:w-[700px] mx-auto text-[#828282] font-serif mt-5">
        {para}
      </p>
    </div>
  );
};

export default SectionTitle;
