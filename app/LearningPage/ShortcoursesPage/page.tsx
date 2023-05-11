import { FC } from "react";
import Input from "@/app/components/UI/input";
import Filter from "@/public/icons/Filter";
import ShortCourseItem from "./components/shortCourseItem";
import { shortcoursedata } from "@/app/data";

interface ShortpagesProps {}

const Shortpages: FC<ShortpagesProps> = () => {
  return (
    <div className=" md:px-0">
      <section className="px-1 md:px-0 w-full ">
        <div className="w-full lg:w-4/6 px-2 ">
          <div className="flex gap-4">
            <div className="relative flex w-full ">
              <Input
                inputs={{ placeholder: "search for short course" }}
                className="focus:border-gray focus:border-[1px] rounded-none border-gray border-[1px]"
              />
            </div>

            <div className="p-4 border-gray border-[1px] flex item-center justify-center ">
              <Filter />
            </div>
          </div>

          <div className="mt-4 w-full">
            {/* <ShortCourseItem />
            <ShortCourseItem /> */}
            {shortcoursedata.map((shortcourses) => (
              <ShortCourseItem
                key={shortcourses.id}
                program={shortcourses.program}
                course={shortcourses.course}
                status={shortcourses.status}
                progress={shortcourses.progress}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shortpages;
