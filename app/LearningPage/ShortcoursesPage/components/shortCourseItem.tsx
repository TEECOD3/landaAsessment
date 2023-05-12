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

  let statusblock = (
    <Button className="bg-blue-700 text-white mt-4 " variant="default">
      continue
    </Button>
  );

  if (status === "completed") {
    statusblock = (
      <div className="bg-green-100 rounded-lg mt-4 w-[5rem] md:w-[6rem] flex item-center justify-center text-sm">
        <h3 className="text-green-200 font-bold ">{status}</h3>
      </div>
    );
  }
  return (
    <div className="w-full border-gray/50 mt-6 border-[1px] p-6 bg-blue-400 flex flex-col md:flex-row justify-between md:items-center ">
      <div className="flex relative  w-full lg:w-3/6 gap-4">
        <Image
          src={computerimg}
          alt="courseitemimage"
          className=" h-[3rem] w-[3rem] md:h-[5rem] md:w-[5rem]"
        />

        <div className="flex md:flex-col mb-4  flex-wrap ">
          <div className="flex-col flex text-sm md:text-base">
            <h4 className=" capitalize text-base text-blue-300 font-normal">
              {program}
            </h4>
            <p className="font-bold md:text-base text-base text-black-100 ">
              {course}
            </p>
            {status === "completed" ? (
              <p></p>
            ) : (
              <div className="absolute md:static top-4 right-1">
                <Progressbar progress={progress} />
              </div>
            )}
          </div>
        </div>
      </div>

      {statusblock}
    </div>
  );
};

export default ShortCourseItem;
