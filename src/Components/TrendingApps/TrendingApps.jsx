import React from "react";
import Container from "../Container/Container";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TrendingApps = ({ data }) => {
  return (
    <div className="py-10 lg:py-20">
      <Container>
        <div>
          <h1 className=" text-3xl lg:text-5xl font-bold text-center ">
            Trending Apps
          </h1>
          <p className="text-[#627382] text-xl text-center lg:mt-4 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 lg:py-10">
          {data.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="text-center py-10">
          <Link
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-2 lg:px-4 py-2 lg:py-3 font-semibold rounded-sm "
            to="/apps"
          >
            Show All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TrendingApps;
