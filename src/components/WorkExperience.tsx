import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export const workExperiences = [
  {
    from: "01 OCT 2023",
    to: "23 SEP 2024",
    role: "Software Engineer",
    employer: "Cognizant Technology Solutions",
    city: "Bangalore",
    country: "India",
    activities: [
      "Led implementation of automated XML processing using Java and the Spring framework, resulting in a 95% reduction in manual processing time.",
      "Led the transition of a legacy C++ application to a modern React.js web application, addressing security vulnerabilities in Windows 10 and optimizing on Windows 10 licensing costs.",
      "Led integration IT Service Management (ITSM) platform Remedy with existing services to create automated incidents during application failures which improved monitoring efficiency .",
      "Led migration of an authentication system from server-based logins with database-stored authorization to a more secure OAuth2 role based authorization.",
      "Planned and executed the Spring Boot and Java Version Migration process, including dependency management, testing, and deployment, ensuring minimal downtime and a seamless transition.",
      "Managed and led a team to address security vulnerabilities flagged by Dependabot, ensuring timely resolution of potential threats.",
    ],
  },
  {
    from: "27 JUL 2021",
    to: "01 OCT 2023",
    role: "Junior Software Engineer",
    employer: "Cognizant Technology Solutions",
    city: "Bangalore",
    country: "India",
    activities: [
      "Acted as both a Junior Software Developer and Level 3 Support, effectively resolving complex technical issues.",
      "Developed a suite of scalable micro-services using Spring framework for RESTful APIs and queue based processing.",
      "worked on optimising SQL query performance through database schema analysis, resulting in a daily time savings of 4 hours which is 50% reduction in runtime. ",
      "Leveraged Spring framework to build automated tasks, streamlining critical processes and reducing manual intervention.",
      "Provided Level 3 Support for critical production issues, resolving issues promptly, and ensuring minimal service disruption.",
      "Utilized DataDog for monitoring and optimizing application performance, ensuring seamless user experiences.",
      "Mentored and managed a team of trainees, providing guidance, support, and technical training to facilitate their professional growth.",
    ],
  },
];

const WorkExperience = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn(" ", className)} {...props} id="workExperience">
    <CardHeader>
      <CardTitle>Work Experience</CardTitle>
    </CardHeader>
    <CardContent className="text-left">
      <div className={`pl-4 md:pl-[175px]`}>
        {workExperiences.map((workExperience, index) => {
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
                <div>{workExperience.role}</div>
              </div>
              <div className="border-l-2 border-slate-400 group-last:border-l-0 pl-3 md:pl-2  ml-2 ">
                <div className="flex flex-wrap-reverse md:flex-row items-baseline  font-medium">
                  <div className={`order-3 md:order-2  text-sm md:pl-1 `}>
                    {workExperience.employer}
                  </div>

                  <div
                    className={` order-1 text-xs  md:absolute md:-translate-x-[190px] `}
                  >
                    {workExperience.from}-{workExperience.to}{" "}
                  </div>
                  <div className={`order-2 md:order-3 text-xs`}>
                    . {workExperience.city + `,` + workExperience.country}
                  </div>
                </div>

                <ul className=" pl-5 pr-1 space-y-1 text-gray-700 list-disc list-outside m-1  dark:text-slate-50 font-semibold">
                  {workExperience.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
                <br></br>
              </div>
            </div>
          );
        })}
      </div>
    </CardContent>
  </Card>
));

export { WorkExperience };
