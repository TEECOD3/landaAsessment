import React from "react";
import type { Metadata } from "next";
import Input from "../components/UI/input";
import Courseitem from "./components/CourseItem";
import Filter from "@/public/icons/Filter";
import { courseitemdata } from "../data";

export const metadata: Metadata = {
  title: "Learning",
};

const Learning = () => {
  return (
    <>
      <section className="w-full px-3 md:px-0">
        <div className="w-full lg:w-4/6 px-2">
          <div className="flex gap-4">
            <Input
              inputs={{ placeholder: "search for programs" }}
              className="focus:border-gray focus:border-[1px] rounded-none border-gray border-[1px]"
            />
            <div className="p-4 border-gray border-[1px] flex item-center justify-center ">
              <Filter />
            </div>
          </div>

          <div className="mt-4 w-full">
            {/* <Courseitem status="ongoing" />
            <Courseitem status="suspended" />
            <Courseitem status="completed" /> */}

            {courseitemdata.map((courses) => (
              <Courseitem
                key={courses.id}
                school={courses.university}
                status={courses.status}
                degree={courses.degree}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Learning;
