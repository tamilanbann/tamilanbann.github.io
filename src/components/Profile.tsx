import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import Photo from "@/assets/Photo.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Profile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn(" ", className)} {...props}>
    <CardContent className="text-left md:flex  justify-center items-center p-3 mx-2 ">
      <div className="order-1  md:order-2 md:w-2/5  ">
        <div className="flex justify-center items-center">
          <Avatar>
            <AvatarImage src={Photo} className="h-[300px] w-[300px] " />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          {/* <img
            src={Photo}
            alt="profile"
            className={`h-[300px] shadow shadow-black md:h-[350px] w-auto  rounded-lg  duration-1000 transition-opacity`}
          ></img> */}
        </div>
      </div>
      <div
        className={`order-2  md:order-1 md:w-3/5 duration-1000 transition  text-black-100 `}
      >
        <p className="font-semibold p-2 text-3xl">Hello.</p>
        <p className="font-medium p-2 ">
          I am Tamilanban Nakkeeran .I am a Passionate and results-driven
          software developer skilled in Java, Spring Boot, JavaScript, and
          React.js. and with experience in automating processes, developing REST
          APIs,React Frontend, backend microservices, and optimising SQL
          queries, leading the migration of legacy projects.
        </p>
      </div>

      <div></div>
    </CardContent>
  </Card>
));

export { Profile };
