import React, { SVGProps } from "react";

type LogoutIconProps = SVGProps<SVGSVGElement>;
const LogoutIcon: React.FC<LogoutIconProps> = (props) => (
  <svg
    width={19}
    height={19}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.5c0-1.1.9-2 2-2h8v2H2v14h8v2H2c-1.1 0-2-.9-2-2v-14Zm14.176 6L11.64 5.964l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414 2.536-2.536H7.59v-2h6.586Z"
      fill="#000"
    />
  </svg>
);

export default LogoutIcon;
