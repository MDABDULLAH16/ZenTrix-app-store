import NumberAbbreviate from "number-abbreviate";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const numberAbr = new NumberAbbreviate();
const InstalledAppsCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, size } = app;
  const formatDownload = numberAbr.abbreviate(downloads, 1).toUpperCase();
  return (
    <div
      className="flex justify-between items-center bg-white my-4 p-4
    "
    >
      <div className="flex gap-4 ">
        <div>
          <img
            className="w-[80px] bg-[#D9D9D9] rounded-sm p-2"
            src={image}
            alt={title}
          />
        </div>
        <div className="text-left ">
          <h1 className="text-xl font-medium">{title}</h1>
          <div className="flex mt-4">
            <div className="flex items-center  gap-2 pr-4 ">
              <BiDownload className="text-[#00D390] " />

              <span className=" text-[#00D390]  font-medium  ">
                {formatDownload}
              </span>
            </div>
            <div className="flex  items-center gap-2 lg:pr-6 pr-4">
              <FaStar className="text-[#FF8811]   " />

              <span className=" text-[#FF8811]   font-medium  ">
                {ratingAvg}
              </span>
            </div>
            <div>
              <h3 className="text-[#627382]">{size}MB</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn bg-[#00D390] font-semibold text-white">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
