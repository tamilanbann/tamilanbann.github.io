import { workExperiences } from "./constants/workExperienceConstant";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function WorkExperience() {
  const workExperienceRef = useRef();
  const isWorkExperiencVisible = useInView(workExperienceRef);

  //   const [isWorkExperiencVisible, setIsWorkExperiencVisible] = useState(false);
  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsWorkExperiencVisible(entry.isIntersecting);
  //     });
  //     observer.observe(workExperienceRef.current);
  //   });
  return (
    <section className="text-left bg-slate-200" ref={workExperienceRef}>
      <div className="p-2 text-xl font-bold">Work Experience:</div>
      <div
        className={`pl-4 md:pl-[175px]  duration-1000 transition ${
          isWorkExperiencVisible ? "  " : " translate-x-full"
        }`}
      >
        {workExperiences.map((workExperience, index) => {
          return (
            <div className=" group " key={index}>
              <div className="flex -translate-x-[3px]">
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
                <div className="flex flex-wrap-reverse md:flex-row items-baseline ">
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

                <ul className=" pl-5 pr-1 space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400 ">
                  {workExperience.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/*

 <div className="pl-4 md:pl-32 ">
      {workExperiences.map((workExperience) => {
        return (
          <div className="text-left  ">
            <div className="flex -translate-x-[3px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="black"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                />
              </svg>
              <div>{workExperience.role}</div>
            </div>
            <div className="border-l-2 pl-2  ml-2 ">
              <div className="flex flex-wrap-reverse md:flex-row items-baseline md:-translate-x-[135px]">
                <div className={`order-3 md:order-2  text-sm md:pl-2`}>
                  {workExperience.employer}
                </div>

                <div className={`order-1 text-xs  `}>
                  {workExperience.from}-{workExperience.to}{" "}
                </div>
                <div className={`order-2 md:order-3 text-xs`}>
                  . {workExperience.city + `,` + workExperience.country}
                </div>
              </div>

              <ul class=" pl-5 pr-1 space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400 ">
                {workExperience.activities.map((activity) => (
                  <li>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>

*/
