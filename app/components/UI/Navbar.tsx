import LogoutIcon from "@/public/icons/Logout";
import { GiHamburgerMenu } from "react-icons/gi";
import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface NavbarProps {
  heading: String;
}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  const { heading } = props;
  return (
    <nav className="w-full  flex justify-between items-center border-b border-gray/40">
      <div className="flex justify-between items-center  w-full px-10 py-6">
        <div className="flex gap-4 items-center justify-center">
          <GiHamburgerMenu className=" font-bold lg:hidden" />
          <h3 className="font-extrabold capitalize ">{heading}</h3>
        </div>

        <div className="flex gap-4">
          <LogoutIcon />
          <IoIosArrowDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
