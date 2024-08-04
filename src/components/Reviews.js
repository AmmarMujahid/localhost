import Image from "next/image";
import React from "react";
import { StarIcon } from "./Assets";

const reviewData = [
  {
    name: "Johnny Cash",
    picture: "/images/Review1.png",
    date: "June 2023",
    rating: "5",
    stars: <StarIcon />,
    review:
      "Michelles place was so great and definitely the perfect place for our long weekend. The lake is amazing!",
  },
  {
    name: "Yuta Watanabe",
    picture: "/images/Review2.png",
    date: "May 2023",
    rating: "4.5",
    stars: <StarIcon />,
    review:
      "The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended.",
  },
  {
    name: "Shane Willis",
    picture: "/images/Review3.png",
    date: "December 2022",
    rating: "4.8",
    stars: <StarIcon />,
    review:
      "A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)",
  },
];

const ReviewsCard = () => {
  return (
    <section className="mx-16 my-10">
      <div className="flex justify-between items-center">
        <h2 className="text-secondary-darkest text-2xl font-semibold mb-5">
          Reviews
        </h2>

        <h4 className="font-semibold text-primary">View all</h4>
      </div>

      <div className="flex gap-5">
        {reviewData.map((item) => (
          <ul
            key={item.review}
            className="border-[1px] border-secondary-light rounded-lg p-6 flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <Image
                  src={item.picture}
                  alt="Reviewer image"
                  width={64}
                  height={64}
                  className=""
                />
                <div className="flex flex-col">
                  <span className="text-secondary-darkest font-semibold">
                    {item.name}
                  </span>
                  <span className="text-[#7A7A7A] text-[14px]">
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="flex gap-1 items-center">
                {item.rating}
                {item.stars}
              </div>
            </div>

            <div>
              <p>{item.review}</p>
            </div>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ReviewsCard;
