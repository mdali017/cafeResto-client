import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaBeer, FaCartPlus } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const [bg, setBg] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salads">Order Food</Link>
      </li>
      <li>
        <Link to={isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}>
          Dashboard
        </Link>
      </li>
      <div to="/dashboard" className="indicator mr-3">
        <span className="indicator-item badge badge-secondary">
          {carts.length || 0}+
        </span>
        <li>
          <Link to="/dashboard/my-cart">
            <FaCartPlus />
          </Link>
        </li>
      </div>

      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut}>Log Out</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={`${
        bg ? "bg-gray-500 h-20 rounded-b-lg " : "h-24 bg-gray-300 bg-opacity-30"
      } navbar fixed top-0 z-10 transition-all  duration-300 max-w-screen-xl mx-auto text-white`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className=" normal-case text-xl">CafeResto</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
