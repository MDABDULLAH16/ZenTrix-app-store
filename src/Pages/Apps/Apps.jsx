import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";

const Apps = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>this is app Pages</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 lg:py-10">
        {data.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
