import React from "react";
import Segment from "./Segment";

const SegmentFeed = () => {
  const segmentsArr = Array.from({ length: 8 }, (_, i) => i + 1);

  console.log();
  return (
    <div>
      {segmentsArr.map((x, index) => (
        <Segment key={index} index={index} />
      ))}
    </div>
  );
};

export default SegmentFeed;
