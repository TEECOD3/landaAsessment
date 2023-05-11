import React, { FC, SVGProps } from "react";

const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.886 10.992a6.426 6.426 0 0 0 8.498.528l4.255 4.255a.8.8 0 0 0 1.132-1.131l-4.256-4.256A6.434 6.434 0 0 0 1.886 1.89a6.435 6.435 0 0 0 0 9.103Zm1.132-7.97A4.836 4.836 0 1 1 1.6 6.442a4.801 4.801 0 0 1 1.417-3.421v.001Z"
      fill="#222"
    />
  </svg>
);

export default SearchIcon;
