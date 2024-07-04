"use client"; // Add this directive at the top of your file

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const routes = [{ route: "/", label: "Home" }];

const subRoutes = [
  { route: "/profile", label: "Profile" },
  { route: "/event", label: "Events" },
];

const LeftSidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        {routes.map(({ route, label }) => (
          <Link key={route} href={route} legacyBehavior>
            <a className="flex items-center">
              <Image
                alt="Logo"
                src="/icons/Subtract.svg"
                width={100}
                height={100}
              />
              <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">
                {label}
              </h1>
            </a>
          </Link>
        ))}
        <div className="flex flex-col">
          <button onClick={toggleMenu} className="flex items-center">
            <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">
              Menu
            </h1>
          </button>
          {menuOpen && (
            <div className="flex flex-col ml-4">
              {subRoutes.map(({ route, label }) => (
                <Link key={route} href={route} legacyBehavior>
                  <a className="text-20 font-bold text-white-1 max-lg:hidden">
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default LeftSidebar;
