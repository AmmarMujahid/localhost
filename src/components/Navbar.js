import React from "react";
import { HeaderLogo } from "./Assets";
import Image from "next/image";

const NavItems = [
  { title: "Home", id: "#home" },
  { title: "Stays", id: "#stays" },
  { title: "Become a host", id: "#becomeahost" },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <div>
          <HeaderLogo />
        </div>

        <ul className="flex gap-8">
          {NavItems.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-primary">
              {item.title}
            </li>
          ))}
        </ul>

        <div className="flex gap-5">
          <Image
            src="/images/Notifications.svg"
            width={26}
            height={26}
            alt="Picture of the author"
            className="cursor-pointer"
          ></Image>
          <Image
            src="/images/Avatar.svg"
            width={36}
            height={36}
            alt="Picture of the author"
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
