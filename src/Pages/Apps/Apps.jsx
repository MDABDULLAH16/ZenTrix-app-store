import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import Container from "./../../Components/Container/Container";
import { useState } from "react";

const Apps = () => {
  const data = useLoaderData();
  const [filterData, setFilterData] = useState(data);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const amr = "amar";
    amr.toLowerCase;
    const search = e.target.value.trim().toLowerCase();
    const filterData = data.filter((app) =>
      app.title.toLowerCase().includes(search)
    );
    setFilterData(filterData);
  };

  return (
    <div className="bg-[#F5F5F5] py-10 lg:py-20">
      <Container>
        <div>
          <div>
            <h1 className="text-5xl font-bold">Our All Applications</h1>
            <p className="text-xl text-[#627382] ">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <p className="font-semibold text-lg lg:text-2xl">
              ({filterData.length}) Apps Found
            </p>{" "}
            <input
              onChange={handleOnChange}
              className="py-2 px-4 border border-[#D2D2D2]"
              type="text"
              placeholder=" 🔍 Search Apps "
            />
          </div>
          <div className="    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 ">
            {filterData.length === 0 ? (
              <>
                <h1>no apps found</h1>
              </>
            ) : (
              filterData.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Apps;
