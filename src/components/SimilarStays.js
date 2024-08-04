import Image from "next/image";
import React from "react";
import { Guest, StarIcon } from "./Assets";

const data = [
  {
    picture: "/images/SimilarStays1.png",
    title: "Missisuaga Aistream",
    subtitle: "Missisauga, Ontario, Canada",
    rating: "4.8",
    stars: <StarIcon />,
    price: "$502",
    guests: "2 guests",
  },
  {
    picture: "/images/SimilarStays2.png",
    title: "Urban Loft",
    subtitle: "Urban Loft",
    rating: "4.9",
    stars: <StarIcon />,
    price: "$460",
    guests: "3 guests",
  },
  {
    picture: "/images/SimilarStays3.png",
    title: "Forestville Cottages",
    subtitle: "Simcoe, Ontario Canada",
    rating: "4.7",
    stars: <StarIcon />,
    price: "$480",
    guests: "2 guests",
  },
];

const SimilarStays = () => {
  return (
    <section className="mx-16 my-10">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-secondary-darkest text-2xl font-semibold mb-5">
            Similar stays
          </h2>
          <h4 className="font-semibold text-primary">View all</h4>
        </div>

        <div className="flex justify-between items-center">
          {data.map((item) => (
            <ul key={item.title} className="flex gap-4 items-center">
              <li>
                <Image
                  src={item.picture}
                  alt={item.title}
                  width={181}
                  height={143}
                  className="rounded-l-xl"
                />
              </li>

              <li>
                <h3 className="font-semibold text-secondary-darkest">
                  {item.title}
                </h3>
                <h4 className="text-[14px] text-secondary-dark">
                  {item.subtitle}
                </h4>

                <div className="flex gap-1 items-center my-2 text-secondary-darkest text-[14px] font-semibold">
                  <span>{item.rating}</span>
                  <span>{item.stars}</span>
                </div>

                <div className="flex items-center">
                  <div className="text-primary font-semibold">
                    {item.price}{" "}
                  </div>

                  <span className="text-[14px] text-[#787878]">/night</span>

                  <span className="mx-2 text-xs text-[#787878]">|</span>

                  <div>
                    <Guest />{" "}
                  </div>

                  <div className="text-[14px] text-[#787878]">
                    {item.guests}
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarStays;
