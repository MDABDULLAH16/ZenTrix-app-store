import NumberAbbreviate from "number-abbreviate";
import { BiDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

// import NumberAbbreviate from "number-abbreviate";
const downloadsNumber = new NumberAbbreviate();
const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  const formatDownload = downloadsNumber.abbreviate(downloads, 1).toUpperCase();
  const navigate = useNavigate();
  const handleGoDetails = (id) => {
    navigate(`/appDetails/${id}`);
  };
  return (
    <div
      onClick={() => handleGoDetails(id)}
      className="p-4 w-full bg-white rounded-sm"
    >
      <img
        className=" bg-[#D9D9D9] p-4 rounded-lg w-full"
        src={image}
        alt={app.title}
      />

      <h2 className="my-4 text-xl font-medium">{title}</h2>

      <div className="flex items-center justify-between">
        <small className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] font-medium px-2.5 rounded-sm ">
          {" "}
          <BiDownload /> {formatDownload}
        </small>
        <small className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] font-medium px-2.5 rounded-sm ">
          <FaStar className="text-[#FF8811]" /> {ratingAvg}
        </small>
      </div>
    </div>
  );
};

export default AppCard;
