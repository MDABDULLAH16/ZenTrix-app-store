import React from "react";
import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import logo from "/logo.png";
import github from "/github.svg";
const Navbar = () => {
  const links = (
    <div className="flex flex-col lg:flex-row gap-8 items-center text-[16px] font-medium font-inter ">
      <NavLink className=" " to="/">
        Home
      </NavLink>
      <NavLink to="/apps">Apps</NavLink>
      <NavLink to="/installation">My Installation</NavLink>
    </div>
  );
  return (
    <div className="bg-base-100">
      <Container>
        <div className="navbar my-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img height={40} width={40} src={logo} alt="" />
              ZenTrix
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to="https://github.com/MDABDULLAH16"
              className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"
            >
              {" "}
              <img src={github} alt="" /> Contribute
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
