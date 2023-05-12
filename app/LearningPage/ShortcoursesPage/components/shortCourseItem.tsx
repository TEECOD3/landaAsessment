import { FC } from "react";
import Image from "next/image";
import computerimg from "../../../../public/computersciimg.png";
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
    <Button className="bg-blue-700 text-white " variant="default">
      continue
    </Button>
  );

  if (status === "completed") {
    statusblock = (
      <div className="bg-green-100 rounded-lg py-2 px-4 w-[5rem] md:w-[6rem] flex item-center justify-center text-sm">
        <h3 className="text-green-200">{status}</h3>
      </div>
    );
  }
  return (
    <div className="w-full  mt-6 p-6 bg-blue-400 flex flex-col md:flex-row justify-between md:items-center ">
      <div className="flex relative flex-col md:flex-row w-full lg:w-3/6 gap-4">
        <Image
          src={computerimg}
          alt="courseitemimage"
          className="h-[5rem] w-[5rem]"
        />

        <div className="flex md:flex-col mb-4 ">
          <div className="flex-col flex">
            <h4 className="text-base text-blue-300 font-normal">{program}</h4>
            <p className="font-bold text-base text-black-100">{course}</p>
          </div>

          <div className="absolute md:static top-4 right-2">
            <Progressbar progress={progress} />
          </div>
        </div>
      </div>

      {statusblock}
    </div>
  );
};

export default ShortCourseItem;
