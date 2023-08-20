import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();

  const noHeaderAndFooter = location.pathname.includes("login");

  return (
    <div>
      {noHeaderAndFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
