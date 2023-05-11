import { FC } from "react";
import { useState } from "react";
interface ProgressbarProps {
  progress: number;
}

const Progressbar: FC<ProgressbarProps> = (props: ProgressbarProps) => {
  const { progress } = props;

  return (
    <div className="flex flex-col md:flex-row  md:gap-3 items-center justify-start w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-full h-[5px] rounded-lg bg-gray/60  ">
          <div
            className={`w-${progress} w-[80%]  h-full rounded-lg bg-blue-300 transition-all delay-150 duration-200 ease-in`}
          ></div>
        </div>
      </div>
      <p className="text-[10px] md:text-sm  w-[5rem] mt-2 md:w-full">
        <span>{progress}% complete</span>
      </p>
    </div>
  );
};

export default Progressbar;
