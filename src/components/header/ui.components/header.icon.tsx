import React from "react";
import HeaderIcon from "../../../models/header.icon";

export default function Icon({
  iconProps,
}: {
  iconProps: HeaderIcon;
}): React.JSX.Element {
  return (
    <li className="p-2">
      <a href={iconProps.link} target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className=" fill-white bg-black md:h-20  md:min-w-[70px] md:px-6  hover:bg-white hover:fill-black "
          viewBox={iconProps.svg.viewBox}
        >
          <path d={iconProps.svg.path} />
        </svg>
      </a>
    </li>
  );
}
