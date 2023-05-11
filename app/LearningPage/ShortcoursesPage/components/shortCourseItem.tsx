import { FC } from "react";
import Image from "next/image";
import computerimg from "../../../../public/images/computersciimg.png";
import { Button } from "@/app/components/UI/Button";
import Progressbar from "./PorgressBar";

interface ShortCourseItemProps {
  program: string;
  course: string;
  progress: number;
  status: string;
}

const ShortCourseItem: FC<ShortCourseItemProps> = (props) => {
  const { program, course, progress, status } = props;

  let statusblock = <Button className="w-full md:w-11/12 ">Continue</Button>;

  if (status === "completed") {
    statusblock = (
      <div className="w-full justify-start flex ">
        <div className="bg-green-100 rounded-lg p-1 bg-red mt-4  md:w-[6rem] flex item-center justify-center text-sm">
          <h3 className="text-green-200 font-bold ">{status}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className=" border-gray/50 mt-6 border-[1px] px-3 py-3 lg:p-6 bg-blue-400 ">
      <div className="flex flex-col md:flex-row w-full gap-4 mt-4">
        <div className="flex gap-3 md:w-5/6 ">
          <Image
            src={computerimg}
            alt="image"
            className="h-[3rem] w-[3rem]   md:h-[5rem] md:w-[5rem]"
          ></Image>
          <div className="flex md:flex-col w-full justify-between">
            <div className="w-full mb-3">
              <h4 className="font-medium text-blue-300 capitalize ">
                {program}
              </h4>
              <h3 className=" text-[14px] font-semibold capitalize">
                {course}
              </h3>
            </div>

            <div className="flex items-center justify-center h-full  w-1/3 md:w-full">
              <Progressbar progress={progress} />
            </div>
          </div>
        </div>

        <div className=" md:w-1/5   flex items-center justify-center p-4">
          {statusblock}
        </div>
      </div>
    </div>
  );
};

export default ShortCourseItem;
