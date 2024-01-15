import { useInView } from "framer-motion";
import photo from "./assets/photo.jpeg";
import { useRef } from "react";

export function AboutMe() {
  const aboutMeRef = useRef();
  const isAboutMeVisible = useInView(aboutMeRef);

  return (
    <section
      className=" md:flex  justify-center items-center p-3 mx-2 "
      ref={aboutMeRef}
    >
      <div className="order-1  md:order-2 md:w-2/5  ">
        <div className="flex justify-center items-center">
          <img
            src={photo}
            alt="profile"
            className={`h-[300px] shadow shadow-black md:h-[350px] w-auto  rounded-lg  duration-1000 transition-opacity 
            ${isAboutMeVisible ? "opacity-100 " : "opacity-0"}
            `}
          ></img>
        </div>
      </div>
      <div
        className={`order-2  md:order-1 md:w-3/5 duration-1000 transition  text-black-100   ${
          isAboutMeVisible ? "  " : " -translate-x-full"
        }`}
      >
        <p
          className={` p-1 m-2 -z-50 font-serif font-medium text-left capitalize tracking-wide`}
        >
          <span className="font-semibold">Hi there, </span> <br />I am{" "}
          <span className="font-semibold "> Tamilanban Nakkeeran</span>,
          Passionate and results-driven software developer skilled in Java,
          Spring Boot, JavaScript, and React.js.
        </p>
      </div>
    </section>
  );
}
