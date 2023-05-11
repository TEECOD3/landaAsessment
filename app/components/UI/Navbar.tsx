"use client";
import LogoutIcon from "@/public/icons/Logout";
import { GiHamburgerMenu } from "react-icons/gi";
import { FC, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";

interface NavbarProps {
  heading: String;
}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  const [showNav, setshowNav] = useState<boolean>(false);
  const { heading } = props;

  const togglemodalhandler = (): void => {
    setshowNav(!showNav);
  };

  return (
    <>
      <nav className="w-full  flex justify-between items-center border-b border-gray/40">
        <div className="flex justify-between items-center  w-full px-10 py-6">
          <div className="flex gap-4 items-center justify-center">
            <GiHamburgerMenu
              className=" font-bold lg:hidden"
              onClick={togglemodalhandler}
            />
            <h3 className="font-extrabold capitalize ">{heading}</h3>
          </div>

          <div className="flex gap-4">
            <LogoutIcon />
            <IoIosArrowDown />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showNav && <MobileNav setshownav={togglemodalhandler} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
