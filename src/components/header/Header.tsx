import React from "react";
import { icons } from "./costants/icons.constants";
import { Section } from "../../models/models";
import Icon from "./ui.components/header.icon";
import NavItem from "./ui.components/header.navItem";
export function Header({
  navbar,
  setNavbar,
  sections,
}: {
  navbar: { open: boolean };
  setNavbar: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
    }>
  >;
  sections: Section[];
}): React.JSX.Element {
  return (
    <header className="fixed w-full flex justify-between items-center h-20 md:h-20  bg-black z-20">
      <div className="text-white p-4 ">
        {" "}
        <a href="/" rel="">
          Tamilanban Nakkeeran
        </a>
      </div>
      <div className=" flex justify-center items-center ">
        <ul className=" flex justify-center items-center ">
          {icons.map((icon, index) => (
            <Icon iconProps={icon}></Icon>
          ))}
        </ul>
        <nav>
          <button
            className="md:hidden"
            onClick={() => setNavbar({ open: !navbar.open })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-12 h-19"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <ul
            className={`fixed  left-0 right-0 min-h-screen bg-black text-white  
            transition duration-300 transform md:relative
             md:flex md:min-h-0 md:space-y-0 md:space-x-6  md:translate-x-0 ${
               !navbar.open ? "translate-x-full" : "translate-x-0 "
             }`}
          >
            {sections.map((section, index) => (
              <NavItem navItemProps={section}></NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
