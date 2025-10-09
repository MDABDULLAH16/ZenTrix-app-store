import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getAppsFromStored,
  removeAppsFromDB,
} from "../../Utilities/AddToLocalStorage";
import InstalledAppsCard from "../../Components/InstalledAppCard/InstalledAppsCard";
import Container from "./../../Components/Container/Container";
import { toast } from "react-toastify";

const Installation = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const getStoredApps = getAppsFromStored();
    if (getStoredApps.length > 0) {
      const storedApps = allApps.filter((apps) =>
        getStoredApps.includes(apps.id)
      );
      setInstalledApps(storedApps);
    }
  }, []);

  const handleUninstall = (id) => {
    const remainingApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingApps);
    toast.success("App is Uninstalled done!");
    removeAppsFromDB(id);
  };
  return (
    <div className="bg-[#F5F5F5] py-10 lg:py-20 ">
      <Container>
        <div>
          <h1>Your Installed Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>

          <div className="">
            {installedApps.length === 0 ? (
              <p className="text-gray-500 mt-4">No apps installed yet.</p>
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
