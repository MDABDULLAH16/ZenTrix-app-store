import NumberAbbreviate from "number-abbreviate";
import { BiDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const numberAbr = new NumberAbbreviate();

const InstalledAppsCard = ({ app, handleUninstall }) => {
  const { image, title, downloads, ratingAvg, size, id } = app;
  const formatDownload = numberAbr.abbreviate(downloads, 1).toUpperCase();

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 dark:text-gray-300 my-4 p-4 w-full rounded-lg shadow-md flex-wrap sm:flex-nowrap gap-4">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          className="bg-[#D9D9D9] p-4 rounded-lg w-20 h-20 object-contain"
          src={image}
          alt={title}
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-[180px] text-left">
        <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
        <div className="flex flex-wrap items-center mt-2 sm:mt-4 gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <BiDownload className="text-[#00D390]" />
            <span className="text-[#00D390] font-medium">{formatDownload}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-[#FF8811]" />
            <span className="text-[#FF8811] font-medium">{ratingAvg}</span>
          </div>
          <div>
            <h3 className="text-[#627382] dark:text-gray-400">{size}MB</h3>
          </div>
        </div>
      </div>

      {/* Button (always right side) */}
      <div className="flex-shrink-0">
        <button
          onClick={() => handleUninstall(id)}
          className="bg-[#00D390] hover:bg-[#00b37d] transition-all font-semibold text-white px-5 py-2 rounded-md"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
