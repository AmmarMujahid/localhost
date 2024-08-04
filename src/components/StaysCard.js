import React from "react";
import Image from "next/image";
import { HeartIcon, PriceChart, StarIcon } from "./Assets";

const StaysCard = ({ picture, title, subtitle, rating, star }) => {
  return (
    <div className="cursor-pointer transition duration-300 hover:scale-105">
      <div className="relative">
        <Image
          src={picture}
          width={305}
          height={300}
          alt="House"
          className="rounded-t-xl"
        />
        <span className="bg-secondary-lightest p-2 rounded-full absolute top-3 right-7">
          <HeartIcon />
        </span>
      </div>

      <div className="p-4 bg-secondary-lightest rounded-b-xl flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-semibold">{title}</span>
            <span className="text-secondary-dark">{subtitle}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[14px] font-semibold">{rating}</span>
            <span>{star}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-[19px] font-semibold">$658</span>
            <span className="text-[14px] text-secondary-dark">/night</span>
          </div>
          <div className="flex items-center gap-1">
            <PriceChart />
            <span className="text-[14px] text-primary">Price chart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaysCard;
