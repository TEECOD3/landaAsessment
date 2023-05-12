"use client";
import { FC } from "react";
import Image from "next/image";
import computerimg from "../../../public/images/computersciimg.png";

interface CourseitemProps {
  status: string;
  school: string;
  degree: string;
}

const Courseitem: FC<CourseitemProps> = (props: CourseitemProps) => {
  const { status, school, degree } = props;

  let statusblock = (
    <div className="bg-orange-100 rounded-lg py-1  w-[5rem] md:w-[6rem] flex item-center justify-center text-sm">
      <h3 className="text-orange-200 font-bold">{status}</h3>
    </div>
  );
  if (status === "suspended") {
    statusblock = (
      <div className="bg-green-100 rounded-lg py-1  w-[5rem] md:w-[6rem] flex item-center justify-center text-sm">
        <h3 className="text-green-200 font-bold">{status}</h3>
      </div>
    );
  }
  if (status === "completed") {
    statusblock = (
      <div className="bg-green-100 rounded-lg py-1  w-[5rem] md:w-[6rem] flex item-center justify-center text-sm">
        <h3 className="text-green-200 font-bold">{status}</h3>
      </div>
    );
  }

  return (
    <div className="w-full border-gray/50 border-[1px] mt-6 p-6 bg-blue-400 flex flex-col md:flex-row justify-between md:items-center ">
      <div className="flex flex-row w-full lg:w-3/6 gap-3 md:gap-6">
        <Image
          src={computerimg}
          alt="courseitemimage"
          className="h-[5rem] w-[5rem]"
        />

        <div className="flex flex-col mb-4">
          <h4 className="text-base text-blue-300 font-normal">{school}</h4>
          <p className="font-bold text-base text-black-100">{degree}</p>
        </div>
      </div>

      {statusblock}
    </div>
  );
};

export default Courseitem;
