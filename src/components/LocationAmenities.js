import React from "react";
import {
  Cloud,
  CoffeeMaker,
  FireExtinguisher,
  FreeParking,
  Freezer,
  GlassStove,
  HotWater,
  Kitchen,
  Lakeside,
  Location,
  OutdoorShower,
  SecurityCamera,
  Shampoo,
  Wifi,
} from "./Assets";

const amenitiesData = [
  { title: "Lakeside", icon: <Lakeside />, id: "1" },
  { title: "Kitchen", icon: <Kitchen />, id: "2" },
  { title: "Security Cameras on property", icon: <SecurityCamera />, id: "3" },
  { title: "Wifi", icon: <Wifi />, id: "4" },
  { title: "Free parking", icon: <FreeParking />, id: "5" },
  { title: "Outdoor shower", icon: <OutdoorShower />, id: "6" },
  { title: "Hot water", icon: <HotWater />, id: "7" },
  { title: "Shampoo", icon: <Shampoo />, id: "8" },
  { title: "Fire Extinguisher", icon: <FireExtinguisher />, id: "9" },
  { title: "Freezer", icon: <Freezer />, id: "10" },
  { title: "Coffee Maker", icon: <CoffeeMaker />, id: "11" },
  { title: "Glass stove", icon: <GlassStove />, id: "12" },
];

const LocationAmenities = () => {
  return (
    <section className="mx-16 my-11">
      <div className="flex justify-between items-start">
        {/* Amenities */}
        <div>
          <div className="text-secondary-darkest text-2xl font-semibold mb-5">
            Amenities
          </div>

          <div>
            <ul className="grid grid-cols-3 gap-x-10 gap-y-2 mb-8">
              {amenitiesData.map((item) => (
                <li key={item.id} className="flex gap-3 items-center">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button className="text-secondary-darkest font-semibold border-[1px] border-secondary-darkest px-5 py-3 rounded-lg whitespace-nowrap">
              Show all amenities
            </button>
          </div>
        </div>

        {/* Where you'll be */}
        <div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-secondary-darkest text-2xl font-semibold">
                Where you'll be
              </div>
              <div className="flex gap-2 items-center text-secondary-darkest">
                <Location /> <span>The Bridle Path</span>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <span className="row-span-2">
                <Cloud />
              </span>
              <span className="text-secondary-darkest font-semibold">20 C</span>
              <span className="text-[#7A7A7A] text-[14px]">Broken clouds</span>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.6116989261197!2d-79.37034196427139!3d43.73598360289587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd37d0b648b1%3A0xe84c4903372f7f2f!2sThe%20Bridle%20Path%2C%20North%20York%2C%20ON%2C%20Canada!5e1!3m2!1sen!2s!4v1722566114168!5m2!1sen!2s"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAmenities;
