import { Outlet, useNavigation } from "react-router";
import Navbar from "./../../Components/Navbar/Navbar";
import { PulseLoader, RingLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";

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
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
