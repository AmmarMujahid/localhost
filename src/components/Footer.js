import React from "react";

const FooterLinks = [
  { title: "Privacy Policy", id: "#privacypolicy" },
  { title: "Terms & Conditions", id: "#terms&conditions" },
  { title: "Contact Us", id: "#contactus" },
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between py-4">
        <div>© 2023 Localhost, Inc. All Rights Reserved</div>

        <ul className="flex gap-5">
          {FooterLinks.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-primary">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
