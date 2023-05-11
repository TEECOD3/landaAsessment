import React from "react";
import { Button } from "../components/UI/Button";
import Navbar from "../components/UI/Navbar";
import NavLink from "../components/UI/Nav-link";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

type learningpageprops = {
  children: React.ReactNode;
};

const Layout = (props: learningpageprops) => {
  const { children } = props;
  return (
    <main>
      <Navbar heading="Learning" />
      <div className="flex gap-3 flex-col mt-[50px] lg:ml-[50px]">
        <ul className="flex gap-3 text-sm items-center justify-center md:items-start md:justify-start ">
          <li className="">
            <NavLink href="/learning">
              <Button variant="ghost" className=" md:w-[15rem]">
                degrees and programes
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/learning/shortcourses">
              <Button variant="ghost" className=" w-[10rem] md:w-[15rem]">
                short courses
              </Button>
            </NavLink>
          </li>
        </ul>

        <div className="md:ml-8 lg:ml-2">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
