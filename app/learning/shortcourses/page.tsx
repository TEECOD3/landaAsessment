import { FC } from "react";
import Input from "@/app/components/UI/input";
import Filter from "@/public/icons/Filter";
import ShortCourseItem from "./components/shortCourseItem";

interface ShortpagesProps {}

const Shortpages: FC<ShortpagesProps> = () => {
  return (
    <div className="">
      <section className="px-3 md:px-0 w-full ">
        <div className="w-full lg:w-4/6 px-4 ">
          <div className="flex gap-4">
            <Input
              inputs={{ placeholder: "search for short course" }}
              className="focus:border-gray focus:border-[1px] rounded-none border-gray border-[1px]"
            />
            <div className="p-4 border-gray border-[1px] flex item-center justify-center ">
              <Filter />
            </div>
          </div>

          <div className="mt-4 w-full">
            <ShortCourseItem />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shortpages;
