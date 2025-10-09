import { toast } from "react-toastify";

const getAppsFromStored = () => {
  const storedApps = localStorage.getItem("apps");
  if (storedApps) {
    const parseApps = JSON.parse(storedApps);
    return parseApps;
  } else {
    return [];
  }
};

const addToLocalDB = (id) => {
  const storedApps = getAppsFromStored();
  // console.log({ storedApps, id });

  if (storedApps.includes(id)) {
    toast.error("This App already installed");

    return;
  }
  // const newApps = [...storedApps, id];
  storedApps.push(id);
  localStorage.setItem("apps", JSON.stringify(storedApps));
};

const removeAppsFromDB = (id) => {
  const getStoredApps = getAppsFromStored();

  if (getStoredApps.length > 0) {
    const remainingApps = getStoredApps.filter((app) => app !== id);
    localStorage.setItem("apps", JSON.stringify(remainingApps));
  }
};
export { addToLocalDB, getAppsFromStored, removeAppsFromDB };
