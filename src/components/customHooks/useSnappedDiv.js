import { useState } from "react";
const calculateDistanceToCenter = (id) => {
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
const distanceToCenter = (objectList) => {
  return objectList
    .map((number, index) => ({
      index: index,
      distance: calculateDistanceToCenter(`project-index-${index}`),
    }))
    .map((a) => {
      return a;
    });
};
const findClosestElement = (objectListWithDist, compareFn) => {
  if (objectListWithDist.length === 0) {
    return null; // Handle empty array case
  }

  return objectListWithDist.reduce(
    (closest, current) => (compareFn(current, closest) ? current : closest),
    objectListWithDist[0]
  );
};
export default function useSnappedDiv(objectList, initialValue) {
  const [snappedDivIndex, setSnappedDivIndex] = useState(initialValue);
  const [objectListWithDistance, setobjectListWithDistance] = useState(
    distanceToCenter(objectList)
  );

  const updateSnappedDiv = () => {
    const objectListWithDistance = distanceToCenter(objectList);

    console.log(objectListWithDistance);
    setobjectListWithDistance(objectListWithDistance);
    setSnappedDivIndex(
      findClosestElement(
        objectListWithDistance,
        (a, b) => a.distance < b.distance
      ).index
    );
  };
  const distanceToTranslate = (index) => {
    const divId = `project-index-${index}`;
    const div = document.getElementById(divId);
    const distanceToCenter = calculateDistanceToCenter(divId);
    return div ? distanceToCenter - div.offsetWidth + "px" : 0;
  };

  return [
    snappedDivIndex,
    setSnappedDivIndex,
    updateSnappedDiv,
    objectListWithDistance,
    distanceToTranslate,
  ];
}
