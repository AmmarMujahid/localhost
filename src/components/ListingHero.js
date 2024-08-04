"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { HeartIcon, PriceChart, StarIcon, Superhost } from "./Assets";

const displayImages = [
  { title: "/images/Frame1.png", id: "1" },
  { title: "/images/Frame2.png", id: "2" },
  { title: "/images/Frame3.png", id: "3" },
  { title: "/images/Frame4.png", id: "4" },
  { title: "/images/Frame5.png", id: "5" },
];

const ListingHero = () => {
  const [activeImage, setActiveImage] = useState(displayImages[0].title);

  return (
    <section className="mx-16">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-4">
          <Image src={activeImage} alt="Frame" width={1330} height={745} className="h-[445px] rounded-md" />
          <ul className="flex gap-3 rounded-md overflow-auto">
            {displayImages.map((image) => (
              <Image
                src={image.title}
                alt="Frame"
                width={160}
                height={30}
                className="w-36 h-20"
                key={image.id}
                onClick={() => setActiveImage(image.title)}
              />
            ))}
          </ul>
        </div>

        <div className="border-[1px] border-secondary-light rounded-md px-7 py-9">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl text-secondary-darkest font-semibold">
                Brightwoods Cabin
              </h2>

              <h5 className="text-secondary-darkest">
                Bridlepath, Ontario, Canada
              </h5>

              <div className="flex gap-4 items-center">
                <span className="text-secondary-darkest font-semibold flex gap-1 items-center">
                  <span>5.0</span> <StarIcon />
                </span>
                <span className="text-primary">200 Reviews</span>
              </div>
            </div>

            <div>
              <span className="bg-secondary-lightest p-2 rounded-full">
                <HeartIcon />
              </span>
            </div>
          </div>

          <p className="text-secondary-darkest">
            Welcome to our cozy cabin retreat nestled in the heart of
            Bridlepath, Ontario! Surrounded by lush landscapes and tranquil
            trails, this charming getaway offers the perfect blend of rustic
            elegance and modern comfort.{" "}
          </p>

          <div className="my-7 flex flex-col gap-5">
            <div className="flex justify-between items-center ">
              <div className="text-secondary-darkest flex gap-1 items-end">
                <span className="text-4xl font-bold">$658</span>
                <span className="text-[18px]">/night</span>
              </div>
              <span className="text-primary flex gap-1">
                <PriceChart />
                <span>Best time to Book</span>
              </span>
            </div>

            <Button
              title="Book this home"
              primary
              className="w-full text-center"
            />
          </div>

          <div className="text-secondary-dark mb-3">Hosted by:</div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2.5 items-center">
              <Image
                src="/images/Host.png"
                alt="Host image"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span className="font-semibold text-secondary-darkest">
                  Michelle Ward
                </span>
                <span className="text-[14px] text-[#7A7A7A]">
                  Joined in May 2021
                </span>
              </div>
            </div>

            <span className="flex items-center gap-1 bg-[#DEFFF9] rounded-full px-3 py-2">
              <Superhost />
              <span className="text-primary">Superhost</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHero;
