import React, { FC, SVGProps } from "react";

const Filter: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.776 15.002a.852.852 0 0 1-.257.738.885.885 0 0 1-1.253 0l-3.564-3.564a.878.878 0 0 1-.258-.738v-4.55L.187 1.44A.889.889 0 0 1 .337.196.926.926 0 0 1 .89 0h12.443a.92.92 0 0 1 .55.196.889.889 0 0 1 .152 1.244L9.776 6.888v8.114ZM2.702 1.778l3.52 4.497v4.906l1.777 1.777V6.266l3.52-4.488H2.701Z"
      fill="#000"
    />
  </svg>
);

export default Filter;
