import React from "react";
import { useLoaderData } from "react-router";
import Container from "../../Components/Container/Container";
import { BiDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import NumberAbbreviate from "number-abbreviate";
import { MdRateReview } from "react-icons/md";
import RatingsCard from "../../Components/RatingsCard/RatingsCard";
import { toast } from "react-toastify";
import {
  addToLocalDB,
  getAppsFromStored,
} from "../../Utilities/AddToLocalStorage";

const downloadNumber = new NumberAbbreviate();
const AppDetails = () => {
  const app = useLoaderData();
  const {
    title,
    downloads,
    reviews,
    ratings,
    companyName,
    description,
    ratingAvg,
    size,
    image,
    id,
  } = app;
  const formatDownload = downloadNumber.abbreviate(downloads, 1).toUpperCase();
  const formatReviews = downloadNumber.abbreviate(reviews, 1).toUpperCase();
  const handleInstallation = (id) => {
    const getExistApps = getAppsFromStored();
    if (getExistApps.includes(id)) {
      toast.error("already installed");
      return;
    } else {
      toast.success("app is installed successfully");
      addToLocalDB(id);
    }
  };
  return (
    <div className="bg-[#F5F5F5] py-20">
      <Container>
        <div className="  flex flex-col lg:flex-row sm:flex-col md:flex-row lg:gap-10 gap-5 items-center lg:items-start md:items-start  ">
          {/* image  */}
          <div className="">
            <img
              className=" bg-white p-6 max-h-[350px] max-w-[350px]  rounded-lg "
              src={image}
              alt={app.title}
            />
          </div>
          {/* details  */}
          <div className="text-start w-full flex flex-col ">
            <h1 className="text-2xl lg:text-3xl font-semibold lg:font-bold ">
              {title}
            </h1>
            <p className="text-xl font-medium">
              Developed By{" "}
              <span className="text-[#632EE3] ">{companyName}</span>
            </p>
            <div className="w-full">
              <hr className="text-[#001931] opacity-20 my-4 lg:my-8" />
            </div>
            {/* states  */}
            <div className="flex gap-4 items-center ">
              <div className="flex flex-col items-start gap-2  lg:pr-6 pr-4 ">
                <BiDownload className="text-[#00827A] text-4xl " />
                Downloads
                <span className="text-3xl lg:text-4xl font-bold lg:font-extrabold">
                  {formatDownload}
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 lg:pr-6 pr-4">
                <FaStar className="text-[#FF8811] text-4xl " />
                Average Ratings
                <span className="text-3xl lg:text-4xl font-bold lg:font-extrabold">
                  {ratingAvg}
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 lg:pr-6 pr-4 ">
                <MdRateReview className="text-[#632EE3] text-4xl " />
                Total Reviews
                <span className="text-3xl lg:text-4xl font-bold lg:font-extrabold">
                  {formatReviews}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleInstallation(id)}
              className="btn w-fit bg-[#00D390] text-white font-semibold text-xl mt-8"
            >
              {" "}
              Install Now ({size}MB)
            </button>
          </div>
        </div>
        {/* <hr /> */}
        <div className="w-full">
          <hr className="text-[#001931] opacity-20 my-4 lg:my-8" />
        </div>
        {/* Ratings */}
        <div>
          <RatingsCard ratings={ratings}></RatingsCard>
        </div>

        {/* <hr /> */}
        <div className="w-full">
          <hr className="text-[#001931] opacity-20 my-4 lg:my-8" />
        </div>
        {/* description */}

        <div className="text-left ">
          <h3 className="text-2xl font-semibold my-4 lg:my-6">Description</h3>
          <div>
            {description.length > 500 ? (
              <>
                <p className="text-xl text-[#627382]">
                  {description.slice(0, 500)}...
                  <br /> <br />
                  {description.slice(500, 1000)}
                </p>
              </>
            ) : (
              "Description Not Found"
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
