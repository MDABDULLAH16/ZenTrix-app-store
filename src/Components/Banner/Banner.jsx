import React from "react";
import { Link } from "react-router";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="text-center flex flex-col items-center">
          <div className="w-2/3 mx-auto">
            <h1 className="lg:text-7xl text-2xl md:text-4xl sm:text-3xl  font-black">
              We Build {""} <br />
              <span className="bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              {""}
              Apps
            </h1>
            <p className="text-[#627382] text-xl">
              At Zentrix, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>
          <div className="flex gap-4 my-10">
            <Link
              to="https://play.google.com/store/games?hl=en"
              className="flex item-center gap-2 border border-[#D2D2D2] lg:py-3 py-1 px-3 lg:px-6"
            >
              {" "}
              <img
                height={16}
                width={18}
                src="https://i.ibb.co.com/B5Ps7dVp/app-1.png"
                alt="Google Play"
              />
              Google Play
            </Link>
            <Link
              to="https://www.apple.com/app-store/"
              className="flex item-center gap-2 border border-[#D2D2D2] lg:py-3 py-1 px-3 lg:px-6"
            >
              {" "}
              <img
                height={16}
                width={18}
                src="https://i.ibb.co.com/ynQvP2WX/app-store.png"
                alt="App Store"
              />
              App Store
            </Link>
          </div>
          <div className=" mx-auto flex items-center">
            <img
              src="https://i.ibb.co.com/3y2KFhsf/hero.png"
              alt="Hero image"
            />
          </div>
        </div>
      </Container>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  py-10 lg:py-20 text-white text-center">
        <h1 className="text-5xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col lg:flex-row md:flex-row  gap-6 items-center justify-evenly lg:mt-10 mt-5">
          <div className="">
            <p className="text-[#FFFFFF] opacity-80 ">Total Downloads</p>
            <h2 className="lg:text-[64px] text-3xl md:text-5xl font-extrabold my-1 lg:my-4">
              29.6M
            </h2>
            <p className="text-[#FFFFFF]  opacity-80 ">
              21% more than last month
            </p>
          </div>
          <div className="">
            <p className="text-[#FFFFFF] opacity-80 ">Total Reviews</p>
            <h2 className="lg:text-[64px] text-3xl md:text-5xl font-extrabold my-1 lg:my-4">
              906K
            </h2>
            <p className="text-[#FFFFFF]  opacity-80 ">
              46% more than last month
            </p>
          </div>
          <div className="">
            <p className="text-[#FFFFFF] opacity-80 ">Active Apps</p>
            <h2 className="lg:text-[64px] text-3xl md:text-5xl font-extrabold my-1 lg:my-4">
              132+
            </h2>
            <p className="text-[#FFFFFF]  opacity-80 ">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
