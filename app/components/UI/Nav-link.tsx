"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

type navlink = {
  children: React.ReactNode;
  href: string;
};

const NavLink = (props: navlink) => {
  let segment = useSelectedLayoutSegment();
  const { href, children } = props;
  let active = href === `/${segment}`;

  return (
    <Link
      className={active ? "font-bold bg-blue-800 text-4xl" : ""}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
