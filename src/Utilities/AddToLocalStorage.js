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
  //now its just an array
  const storedApps = getAppsFromStored();
  if (storedApps.includes(id)) {
    toast("This App already installed");
    return;
  } else {
    storedApps.push(id);
    const apps = JSON.stringify(storedApps);
    localStorage.setItem("apps", apps);
  }
};
export { addToLocalDB, getAppsFromStored };
