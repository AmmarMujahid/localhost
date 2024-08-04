import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Accommodation, CheckInOut, Guest, Search } from "./Assets";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/HeroBg.png)" }}
      className="bg-cover pt-16 pb-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              Find a <span className="text-primary">host</span> for every
              journey
            </h1>

            <p className="text-[20px] font-light">
              Discover the best local rental properties that fits your every
              travel needs
            </p>
          </div>

          <div className="flex gap-4 justify-between items-center p-3 rounded-md bg-white">
            <div className="flex items-center border-[1px] border-secondary-lightshade rounded-md px-3 py-4">
              <input
                type="text"
                placeholder="Accomodation"
                className="border-none focus:outline-none w-[560px]"
              />
              <Accommodation className="cursor-pointer" />
            </div>

            <div className="flex items-center border-[1px] border-secondary-lightshade rounded-md px-3 py-3">
              <input
                type="text"
                placeholder="Check-in"
                className="border-none focus:outline-none w-[180px]"
              />
              <CheckInOut className="cursor-pointer" />
            </div>

            <div className="flex items-center border-[1px] border-secondary-lightshade rounded-md px-3 py-3">
              <input
                type="text"
                placeholder="Check-out"
                className="border-none focus:outline-none w-[180px]"
              />
              <CheckInOut className="cursor-pointer" />
            </div>

            <div className="flex items-center border-[1px] border-secondary-lightshade rounded-md px-3 py-4">
              <input
                type="text"
                placeholder="Guest"
                className="border-none focus:outline-none w-[180px]"
              />
              <Guest className="cursor-pointer" />
            </div>

            <div>
              <Button primary icon={<Search />} title="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
