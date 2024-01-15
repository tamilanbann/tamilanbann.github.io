import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export function Projects() {
  const projectsRef = useRef();
  const [projectIndex, setProjectIndex] = useState(-1);

  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const calculateDistance = (id) => {
    const div = document.getElementById(id);

    if (div) {
      const divRect = div.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const distance = Math.sqrt(
        Math.pow(centerX - (divRect.left + divRect.right) / 2, 2) +
          Math.pow(centerY - (divRect.top + divRect.bottom) / 2, 2)
      );

      return distance;
    }
  };
  const findClosestElement = (compareFn) => {
    if (projectIndex === -1)
      return {
        index: 0,
        distance: calculateDistance(`project-index-0}`),
      };
    const numbersWithDist = numbers
      .map((number, index) => ({
        index: index,
        distance: calculateDistance(`project-index-${index}`),
      }))
      .map((a) => {
        console.log(a);
        return a;
      });

    if (numbersWithDist.length === 0) {
      return null; // Handle empty array case
    }

    return numbersWithDist.reduce(
      (closest, current) => (compareFn(current, closest) ? current : closest),
      numbersWithDist[0]
    );
  };

  function onScroll() {
    const smallestElement = findClosestElement(
      (a, b) => a.distance < b.distance
    );

    console.log(smallestElement);
    setProjectIndex(smallestElement.index);
  }

  useEffect(() => {
    setWindowWidth(window.screen.width);
    const handleResize = () => {
      // Perform actions on window resize
      setWindowWidth(window.screen.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      onScroll={onScroll}
      className="flex flex-no-wrap snap-x snap-mandatory overflow-x-auto  scroll-touch snap-center  snap-x "
      ref={projectsRef}
    >
      {numbers.map((number, index) => (
        <div
          key={index}
          id={`project-index-${index}`}
          className={`flex-none mx-[5%] w-[90%] md:w-[250px] first:ml-[50%] md:last:mr-[50%]   border rounded-lg overflow-x-auto snap-center snap-mandatory `}
        >
          <div>
            {index} :{projectIndex}
          </div>
        </div>
      ))}
    </section>
  );
}
