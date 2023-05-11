"use client";
import React from "react";
import Link from "next/link";
import LandaIcon from "@/public/icons/landa";
import DashBoardIcon from "@/public/icons/DashboardIcon";
import { MdOutlineMenuBook } from "react-icons/md";
import Arrowright from "@/public/icons/ArrowRight";
import LogoutIcon from "@/public/icons/Logout";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard", icon: <DashBoardIcon /> },
  {
    href: "/LearningPage",
    label: "Learning",
    icon: <MdOutlineMenuBook className="text-3xl" />,
  },
];
const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="min-h-[100%] border-r border-gray/40 bg-blue-100 flex flex-col justify-between  w-full">
      <div className="flex flex-col justify-between  p-5">
        <div className="p-4">
          <LandaIcon />
        </div>
        <div className="flex-col flex w-[90%]  justify-around mt-10">
          {links.map((link) => (
            <div key={link.href} className="w-full flex gap-2 p-1 h">
              <Link
                href={link.href}
                className="w-full relative flex items-center justify-center p-3 gap-3  hover:text-blue-300 text-base font-semibold text-black-100 z-20"
              >
                {link.icon} {link.label}
                {link.href === path && (
                  <motion.div className="absolute h-full w-full top-0 left-0 z-[-2] bg-[#DDE7F8]/70 text-black-100 "></motion.div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex flex-col w-full mx-auto gap-4 font-medium capitalize font-xl">
          <div className="flex w-[90%] mx-auto bg-blue-600 text-white p-6 items-center  gap-x-2">
            <p>Find more Degrees and Short Courses</p>
            <span className="bg-white p-4 cursor-pointer">
              <Arrowright className=" h-4 w-4 animate-bounce text-black-100 " />
            </span>
          </div>
          <div className="flex p-6 justify-between items-center cursor-pointer">
            logout
            <div className="">
              <LogoutIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
