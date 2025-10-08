import { Outlet, useNavigation } from "react-router";
import Navbar from "./../../Components/Navbar/Navbar";
import { PulseLoader, RingLoader } from "react-spinners";

const Root = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <div className="font-inter">
      <Navbar></Navbar>
      <div className="text-center">
        {isLoading && <PulseLoader color="#00D390" />}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
