import { FC } from "react";
import { useState } from "react";
interface ProgressbarProps {
  progress: number;
}

const Progressbar: FC<ProgressbarProps> = (props: ProgressbarProps) => {
  const { progress } = props;

  return (
    <div className="flex flex-col md:flex-row  md:gap-3 items-center justify-start w-[4rem] md:w-[27rem] md:mt-4">
      <div className="w-[7rem] md:w-[17rem] flex items-center justify-center">
        <div className="w-full h-[5px] rounded-lg bg-gray/60  ">
          <div
            className={`w-${progress} w-[80%]  h-full rounded-lg bg-blue-300 transition-all delay-150 duration-200 ease-in`}
          ></div>
        </div>
      </div>
      <p className="text-sm font-semibold w-[5rem] mt-2 md:w-full">
        <span>{progress}% complete</span>
      </p>
    </div>
  );
};

export default Progressbar;
