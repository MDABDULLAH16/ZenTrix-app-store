import { Outlet } from "react-router";
import Navbar from "./../../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-inter">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
