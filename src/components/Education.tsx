import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export const educations = [
  {
    from: "1-OCT-2024",
    to: "31-SEP-2026",
    title: "Masters of science in  Digital Engineering",
    organization: "Bauhaus-Universität Weimar",
    city: "Weimar",
    country: "Germany",
  },
  {
    from: "",
    to: "",
    title: "Bachelor Of Technology in Engineering",
    organization: "Vellore Institute of Technology",
    city: "Vellore",
    country: "India",
  },
  {
    from: "",
    to: "",
    title: "Higher Secondary Education",
    organization: "Maharishi Vidya Mandir Hosur",
    city: "Hosur ",
    country: "India",
  },
];

const Education = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn(" ", className)} {...props}>
    <CardHeader>
      <CardTitle>Education</CardTitle>
    </CardHeader>
    <CardContent className="text-left">
      <div className={`pl-4 md:pl-[175px]`}>
        {educations.map((education, index) => {
          return (
            <div className=" group " key={index}>
              <div className="flex -translate-x-[3px] font-bold ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="black"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                  />
                </svg>
                <div>{education.title}</div>
              </div>
              <div className="border-l-2 border-slate-400 group-last:border-l-0 pl-3 md:pl-2  ml-2 ">
                <div className="flex flex-wrap-reverse md:flex-row items-baseline  font-medium">
                  <div className={`order-3 md:order-2  text-sm md:pl-1 `}>
                    {education.organization}
                  </div>

                  <div
                    className={` order-1 text-xs  md:absolute md:-translate-x-[190px] `}
                  >
                    {education.from}
                    {education.from ? "     -  " : ""}
                    {education.to}{" "}
                  </div>
                  <div className={`order-2 md:order-3 text-xs`}>
                    . {education.city + `,` + education.country}
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          );
        })}
      </div>
    </CardContent>
  </Card>
));

export { Education };
