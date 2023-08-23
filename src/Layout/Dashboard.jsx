import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBeer,
  FaBook,
  FaCalendarAlt,
  FaChartBar,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [carts] = useCart();

  // Todo: load data from the server
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaHome /> Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaUtensils /> Add Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaChartBar /> Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaBook /> Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/dashboard/all-users">
                  <FaUsers /> All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaHome /> User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaCalendarAlt /> Reservations
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaWallet /> Payment History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaShoppingCart /> My Cart
                  <span className="indicator-item badge badge-secondary">
                    {carts.length || 0}+
                  </span>
                </Link>
              </li>
            </>
          )}

          {/* Sidebar content here */}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <FaBars /> Menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
