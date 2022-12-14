import React from "react";
import { tw } from "twind";
import { useIntersectionCounter } from "./useIntersectionCounter";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

function App() {
  const { parentRef, count } = useIntersectionCounter(options);
  console.log(count);

  return (
    <div
      ref={parentRef as React.RefObject<HTMLDivElement>}
      className={tw("flex flex-col")}
    >
      {[...Array(20)].map((_el, index) => (
        <Card key={index} index={index} />
      ))}
    </div>
  );
}

const Card = ({ index }: { index: number }) => {
  return (
    <div id={`${index}`} className={tw("w-32 h-32 m-2 text-gray-200")}>
      {index}
    </div>
  );
};

export default App;
