"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    to: "/cursos",
    label: "Cursos",
  },
  {
    to: "/talleres",
    label: "Talleres",
  },
  {
    to: "/contactanos",
    label: "Contactanos",
  },
];

export default function Nav() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled((prev) => !prev);

  return (
    <header className="relative">
      <nav className="sticky z-10 w-full md:absolute md:bg-gradient-to-b md:from-black/80 md:to-transparent">
        <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <Image
                    width={50}
                    height={50}
                    alt="Logo de dulcesdlissa"
                    src="/l.png"
                  />
                </div>
                <span className="text-2xl font-bold">Dulcesdlissa</span>
              </Link>
              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="humburger"
                  onClick={handleToggle}
                  className={`relative -mr-6 p-6 ${isToggled ? "toggled" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-pink-500 transition duration-300"
                  />
                  <span
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-pink-500 transition duration-300"
                  />
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-gray-900/70 backdrop-blur-2xl transition duration-500 lg:hidden ${
                isToggled ? "origin-top scale-y-100" : ""
              }`}
            />
            <div
              id="navlinks"
              className={`invisible absolute left-0 top-full z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-600 bg-gray-900 p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                isToggled
                  ? "!lg:translate-y-0 !visible !scale-100 !opacity-100"
                  : ""
              }`}
            >
              <div className="w-full lg:w-auto lg:pr-4 lg:pt-0">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link) => (
                    <li key={link.label} onClick={handleToggle}>
                      <a href={link.to} className="block transition md:px-4">
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <button className="before:bg-primary relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span className="relative text-sm font-semibold">
                    Inicia Sesión
                  </span>
                </button>
              </div>
              <div className="mt-12 lg:mt-0">
                <button className="before:bg-primary relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span className="relative rounded-sm bg-pink-500 px-4 py-2 text-sm font-semibold">
                    Empieza Ya
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div></div>
    </header>
  );
}

const LazyAvatar = () => (
  <Image
    src="/avatar.png"
    alt="Avatar"
    width={40}
    height={40}
    className="rounded-full"
  />
);
