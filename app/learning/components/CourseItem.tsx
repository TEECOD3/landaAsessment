import { FC } from "react";
import Image from "next/image";
import computerimg from "../../../public/computersciimg.png";

interface CourseitemProps {}

const Courseitem: FC<CourseitemProps> = () => {
  return (
    <div className="w-full mt-6 p-6 bg-blue-400 flex flex-col md:flex-row justify-between md:items-center ">
      <div className="flex flex-col md:flex-row w-full lg:w-3/6 gap-10">
        <Image
          src={computerimg}
          alt="courseitemimage"
          className="h-[5rem] w-[5rem]"
        />

        <div className="flex flex-col mb-4">
          <h4 className="text-base text-blue-300 font-normal">
            University of Lagos
          </h4>
          <p className="font-bold text-base text-black-100">
            Bachelor of Science (BSc) in Computer Science
          </p>
        </div>
      </div>

      <div className="bg-orange-100 rounded-lg py-2 px-6 w-[8rem] md:w-[10rem] flex item-center justify-center">
        <h3 className="text-orange-200">ongoing</h3>
      </div>
    </div>
  );
};

export default Courseitem;
