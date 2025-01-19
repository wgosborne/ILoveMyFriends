"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiPeanut } from "react-icons/gi";
import classNames from "classnames";

const NavBar = () => {
  const currPath = usePathname();
  console.log(currPath);

  const links = [
    { label: "Scores", href: "/scores" },
    { label: "Games", href: "/games" },
  ];

  return (
    <nav className="flex space-x-6 borber-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <GiPeanut />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
                'text-zinc-900' : link.href === currPath,
                'text-zinc-500' : link.href !== currPath,
                'hover:text-zinc-800 transition-colors' : true
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
