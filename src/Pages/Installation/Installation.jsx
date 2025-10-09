import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getAppsFromStored } from "../../Utilities/AddToLocalStorage";
import InstalledAppsCard from "../../Components/InstalledAppCard/InstalledAppsCard";
import Container from "./../../Components/Container/Container";

const Installation = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const getStoredApps = getAppsFromStored();

    const storedApps = allApps.filter((apps) =>
      getStoredApps.includes(apps.id)
    );
    setInstalledApps(storedApps);
  }, []);

  return (
    <div className="bg-[#F5F5F5] py-10 lg:py-20 ">
      <Container>
        <div>
          <h1>Your Installed Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>

          <div className="">
            {installedApps.map((app) => (
              <InstalledAppsCard key={app.id} app={app}></InstalledAppsCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Installation;
