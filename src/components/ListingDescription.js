"use client";
import React, { useState } from "react";
import { DedicatedWorkspace, FreeCancellation, SelfCheckIn } from "./Assets";

const descriptionCard = [
  {
    vector: <DedicatedWorkspace />,
    title: "Dedicated workspace",
    subtitle: "A private room equipped with WiFi",
    id: "1",
  },
  {
    vector: <SelfCheckIn />,
    title: "Self check-in",
    subtitle: "Check in with just your phone",
    id: "2",
  },
  {
    vector: <FreeCancellation />,
    title: "Free cancellation",
    subtitle: "Cancel anytime",
    id: "3",
  },
];

const text = `<div class="flex flex-col gap-3"><p>Welcome to Brightwoods Cabin, your idyllic retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway.</p>
              <p><span class="text-secondary-darkest font-bold">Living Space:</span> This charming cabin boasts a spacious living area adorned with rustic decor and modern amenities. Enjoy the warmth of the wood-burning fireplace, relax on the plush sofas, and make yourself at home with our entertainment center featuring a flat-screen TV, WiFi, and more.</p>
              <p><span class="text-secondary-darkest font-bold">Bedrooms:</span> With 3 beautifully appointed bedrooms, our cabin comfortably accommodates up to [number of guests]. Each room is furnished with luxurious bedding and unique woodland-inspired touches to ensure a restful slumber.</p>
              <p><span class="text-secondary-darkest font-bold">Kitchen & Dining:</span> Our fully-equipped kitchen offers everything you need to prepare delicious home-cooked meals. The open dining area provides a welcoming space to enjoy meals with friends and family.</p>
              <p><span class="text-secondary-darkest font-bold">Bathrooms:</span> 2 modern bathrooms stocked with fresh towels, toiletries, and all essential amenities add to your convenience.</p>
              <p><span class="text-secondary-darkest font-bold">Outdoor Space:</span> Step outside to a serene outdoor setting. Whether it's a morning coffee on the porch, a BBQ in the yard, or a soothing evening by the fire pit, the beauty of Bridlepath is at your doorstep.</p>
              <p><span class="text-secondary-darkest font-bold">Location:</span> Located just minutes from [local attractions, trails, dining, shopping], our cabin offers the perfect base to explore the best of the region or simply unwind in seclusion.</p>
              <p><span class="text-secondary-darkest font-bold">Hosted with Love:</span> We take pride in hosting our guests and are committed to making your stay unforgettable. We're just a call or message away should you need anything during your stay.</p>
              <p>Come, be our guest at [Cabin Name], and experience a piece of woodland serenity right here in Bridlepath, Ontario. Book now and make yourself at home!</p></div>`;

const ListingDescription = () => {
  const [textDisplay, setTextDisplay] = useState(false);

  return (
    <section className="mx-16 my-11">
      <div>
        <div className="text-secondary-darkest font-semibold text-2xl mb-5">
          About this home
        </div>

        {/* gap property */}

        <div className="flex justify-between items-start gap-52">
          <div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                textDisplay ? "max-h-[9999px]" : "max-h-48"
              }`}
              dangerouslySetInnerHTML={{ __html: text }}
            />

            <span
              className="text-primary font-semibold cursor-pointer"
              onClick={() => setTextDisplay((prev) => !prev)}
            >
              {textDisplay ? "Show Less" : "Show More"}
            </span>
          </div>

          <div className="w-full flex flex-col gap-6">
            {descriptionCard.map((card) => (
              <ul key={card.id} className="flex items-center gap-5">
                <li className="bg-[#DDF4F0] rounded-lg p-4">{card.vector}</li>
                <li className="flex flex-col">
                  <span className="text-secondary-darkest text-[18px] font-semibold">
                    {card.title}
                  </span>
                  <span className="text-[#7A7A7A]">{card.subtitle}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDescription;

function LimitText({ text, limit }) {
  if (text.length < limit) return <>{text}</>;
  return <>{text.slice(0, limit)}...</>;
}
