import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-20 mb-20">
        <Link
          to={`/order/${title ? title : title}`}
          className="btn btn-outline  border-0 border-b-4"
        >
          {title ? title : "See More"}
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
