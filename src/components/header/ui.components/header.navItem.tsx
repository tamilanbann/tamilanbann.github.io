import React from "react";
import { Section } from "../../../models/models";

export default function NavItem({
  navItemProps,
}: {
  navItemProps: Section;
}): React.JSX.Element {
  const headerOffset: number = 100;
  return (
    <li className="w-full hover:bg-white hover:text-black md:w-fit p-2 h-20 flex justify-center items-center">
      <button
        onClick={() =>
          navItemProps.ref.current?.scrollIntoView({
            top:
              navItemProps.ref.current?.getBoundingClientRect().top +
              window.scrollY -
              headerOffset,
            behavior: "smooth",
          })
        }
      >
        {navItemProps.name}
      </button>
    </li>
  );
}
