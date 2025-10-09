import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getAppsFromStored,
  removeAppsFromDB,
} from "../../Utilities/AddToLocalStorage";
import InstalledAppsCard from "../../Components/InstalledAppCard/InstalledAppsCard";
import Container from "./../../Components/Container/Container";
import { toast } from "react-toastify";
import { BiDownload } from "react-icons/bi";
import NotAppFound from "../../Components/NotAppFound/NotAppFound";

const Installation = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const getStoredApps = getAppsFromStored();
    if (getStoredApps.length > 0) {
      const storedApps = allApps.filter((apps) =>
        getStoredApps.includes(apps.id)
      );
      setInstalledApps(storedApps);
    }
  }, []);
  // const sortApps=[...installedApps].
  const handleUninstall = (id) => {
    const remainingApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingApps);
    toast.success("App is Uninstalled done!");
    removeAppsFromDB(id);
  };
  const handleHighToLow = (type) => {
    if (type === "High-Low") {
      setSortType("High-Low");

      const sortHigh = [...installedApps].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalledApps(sortHigh);
    }
  };
  const handleLowToHigh = (type) => {
    if (type === "Low-High") {
      setSortType("Low-High");
      const sortHigh = [...installedApps].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalledApps(sortHigh);
    }
    setSortType;
  };
  return (
    <div className="bg-[#F5F5F5] py-10 lg:py-20 ">
      <Container>
        <div>
          <div>
            <h1 className=" text-3xl lg:text-5xl font-bold ">
              Your Installed Apps
            </h1>
            <p className="text-xl text-[#627382] mt-2">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-2xl">
              {installedApps.length} Apps Found
            </p>
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 p-2 text-[#627382]"
              >
                sort by {sortType ? sortType : "Download"}{" "}
                <BiDownload className="text-[#00D390]"></BiDownload>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm text-[#627382] "
              >
                <li
                  className="text-[#627382]"
                  onClick={() => handleHighToLow("High-Low")}
                >
                  <a>High-Low</a>
                </li>
                <li
                  className="text-[#627382]"
                  onClick={() => handleLowToHigh("Low-High")}
                >
                  <a>Low-High</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            {installedApps.length === 0 ? (
              <NotAppFound></NotAppFound>
            ) : (
              installedApps.map((app) => (
                <InstalledAppsCard
                  key={app.id}
                  app={app}
                  handleUninstall={handleUninstall}
                />
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Installation;
