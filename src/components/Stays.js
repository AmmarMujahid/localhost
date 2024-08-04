"use client";
import React, { useState } from "react";
import StaysCard from "./StaysCard";
import { BentoMenu, Map, Search, StarIcon } from "./Assets";
import Button from "./Button";

const CardsList = [
  <StaysCard
    picture="/images/House1.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House2.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House2.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House2.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House2.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House2.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House3.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House4.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House5.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House6.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House7.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House8.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House9.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House10.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House11.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
  <StaysCard
    picture="/images/House12.png"
    title="Brightwoods Cabin"
    subtitle="Bridlepath, Ontario, Canada"
    rating="4.9"
  />,
];

const Stays = () => {
  const initialVisibleCards = 12;

  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  const showLessCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards - 4);
  };

  return (
    <div className="my-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-3">
          <div>
            <span className="text-xl">Stays nearby: </span>
            <span className="text-xl font-semibold">Toronto Ontario</span>
          </div>

          <div className="flex items-center bg-secondary-lightest p-1.5 rounded-md">
            <span className="bg-primary rounded-md p-2">
              <BentoMenu />
            </span>
            <span className="p-2">
              <Map />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-wrap gap-5 justify-between">
            {CardsList.slice(0, visibleCards).map((card) => (
              <div key={card}>{card}</div>
            ))}
          </div>

          <div>
            {visibleCards < CardsList.length && (
              <div className="flex justify-center mt-6">
                <Button onClick={showMoreCards} secondary title="Show more" />
              </div>
            )}
            {visibleCards > initialVisibleCards && (
              <div className="flex justify-center mt-6">
                <Button onClick={showLessCards} secondary title="Show less" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stays;
