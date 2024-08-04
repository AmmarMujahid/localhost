import React from "react";

const FooterLinks = {
  Support: [
    { title: "Help Centre", id: "#helpcentre" },
    { title: "AirCover", id: "#aircover" },
    { title: "Combating discrimination", id: "#combatingdiscrimination" },
    {
      title: "Supporting people with disabilities",
      id: "#supportingpeoplewithdisabilities",
    },
    { title: "Cencellation options", id: "#cencellationoptions" },
    {
      title: "Report neighbourhood concern",
      id: "#reportneighbourhoodconcern",
    },
  ],
  Hosting: [
    { title: "Local home", id: "#localhome" },
    { title: "Cover for hosts", id: "#coverforhosts" },
    { title: "Hosting resources", id: "#hostingresources" },
    { title: "Community forum", id: "#communityforum" },
    { title: "Hosting responsibly", id: "#hostingresponsibly" },
  ],
  Localhost: [
    { title: "Newsroom", id: "#newsroom" },
    { title: "New Features", id: "#newfeatures" },
    { title: "Careers", id: "#careers" },
    { title: "Investres", id: "#investres" },
    { title: "Gift cards", id: "#giftcards" },
  ],
};

const FooterNav = () => {
  return (
    <div className="bg-secondary-lightest">
      <div className="container mx-auto flex justify-between items-start py-10">
        <ul className="flex flex-col gap-3">
          <h3 className="font-semibold text-xl">Support</h3>
          {FooterLinks.Support.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-primary">
              {item.title}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-3">
          <h3 className="font-semibold text-xl">Hosting</h3>
          {FooterLinks.Hosting.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-primary">
              {item.title}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-3">
          <h3 className="font-semibold text-xl">Localhost</h3>
          {FooterLinks.Localhost.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-primary">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterNav;
