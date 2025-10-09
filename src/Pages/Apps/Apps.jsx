import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import Container from "./../../Components/Container/Container";
import { useState } from "react";
import NotAppFound from "../../Components/NotAppFound/NotAppFound";
import { RingLoader } from "react-spinners";

const Apps = () => {
  const data = useLoaderData();
  const [filterData, setFilterData] = useState(data);
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    // console.log(e.target.value);

    const search = e.target.value.trim().toLowerCase();

    setLoading(true);
    setTimeout(() => {
      const filterData = data.filter((app) =>
        app.title.toLowerCase().includes(search)
      );
      setFilterData(filterData);
      setLoading(false);
    }, 500);
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
          <div
            className={`${
              filterData.length === 0
                ? "flex items-center justify-center w-full"
                : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 text-center   "
            }`}
          >
            {filterData.length === 0 ? (
              <NotAppFound></NotAppFound>
            ) : loading ? (
              <div className="fixed inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm z-50">
                <RingLoader color="#00D390" size={100} />
              </div>
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
