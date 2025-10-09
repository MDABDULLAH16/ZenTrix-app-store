import React from "react";
import notAppFound from "/App-Error.png";
import { useNavigate } from "react-router";
const NotAppFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[#F5F5F5] h-dvh w-full mx-auto flex items-center flex-col justify-center py-8 lg:py-12">
      <img
        className="lg:w-[250px] w-[100px] h-auto"
        src={notAppFound}
        alt="Not App Found image"
      />
      <h1 className=" text-2xl lg:text-5xl font-semibold ">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[#627382] text-xl mt-2">
        The page you are looking for is not available.
      </p>
      <button
        onClick={handleGoBack}
        className="btn rounded-sm text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-4"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NotAppFound;
