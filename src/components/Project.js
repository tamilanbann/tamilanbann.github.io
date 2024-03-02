import { useRef } from "react";
import useSnappedDiv from "./customHooks/useSnappedDiv";

import { projects } from "./constants/projectsConstant";

export function Project() {
  const projectsRef = useRef();
  const [snappedProjectIndex, setSnappedProjectIndex, updateSnappedProject] =
    useSnappedDiv(projects, -1);

  const onScroll = () => {
    if (snappedProjectIndex === -1) {
      setSnappedProjectIndex(0);
      return;
    }
    updateSnappedProject();
  };

  return (
    <section
      onScroll={onScroll}
      className="flex no-flickr gap-10 md:gap-20  flex-no-wrap snap-x snap-mandatory overflow-x-auto transition-height duration-500 ease-in-out  scroll-touch   p-3 h-[70vh] max-h-[450px] scroll-smooth"
      ref={projectsRef}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          id={`project-index-${index}`}
          className={`flex-none  sticky duration-1000  ease-in-out ${
            index === snappedProjectIndex
              ? `bg-black  text-white`
              : ` bg-slate-200 bg-slate-300 `
          } w-[90%] max-w-[250px] first:ml-[50%] last:mr-[50%] scroll-pt-[]  border rounded-lg overflow-x-auto snap-center snap-mandatory `}
        >
          <div>
            <div>{project.title}</div>
            <div>{project.description}</div>
            <div>
              <iframe
                className={`w-full , h-auto`}
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                oallowfullscreen="true"
                msallowfullscreen="true"
                src={`https://www.youtube.com/embed/${project.video}?autoplay=${
                  index === snappedProjectIndex ? 1 : 0
                }&mute=1&loop=1`}
                title={project.title}
              ></iframe>
            </div>
            <div>
              <span>Technologies: </span>
              {project.technologies.map((technology) => {
                return (
                  <span className="after:content-[',__'] last:after:content-[]">
                    {technology}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
