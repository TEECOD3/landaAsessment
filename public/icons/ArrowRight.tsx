import React, { SVGProps } from "react";

type ArrowRightProps = SVGProps<SVGSVGElement>;

const ArrowRight: React.FC<ArrowRightProps> = (props) => (
  <svg
    width={11}
    height={10}
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.086 3.95 4.55 1.414 5.964 0l4.95 4.95-4.95 4.95L4.55 8.486 7.086 5.95H.5v-2h6.586Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowRight;
