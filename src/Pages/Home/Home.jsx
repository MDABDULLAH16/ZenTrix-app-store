import React, { Suspense } from "react";
import Banner from "./../../Components/Banner/Banner";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="bg-[#F5F5F5] py-4 sm:py8 md:py-12 lg:py-20">
      <Banner />
      <TrendingApps data={data}></TrendingApps>
    </div>
  );
};

export default Home;
