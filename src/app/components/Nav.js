import React, { useState } from "react";
import Buttons from "./Buttons";
import Link from "next/link";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuFold4Fill } from "react-icons/ri";
export default function Nav() {
  let [hide, setHide] = useState(false);
  console.log(hide);
  return (
    <>
      <nav
        className={`flex justify-between items-center p-3 bg-white/12  ${
          hide
            ? "max-lg:flex max-lg:flex-col max-lg:w-full max-lg:h-screen"
            : "max-lg:hidden"
        }`}
      >
        <ul>
          <li className="text-white hover:text-pink-500 text-2xl font-bold">
            Team 99
          </li>
        </ul>
        <ul className={`flex gap-10 max-lg:flex-col`}>
          <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
            Clients
          </li>
          <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
            <a href="#service" onClick={() => setHide(false)}>
              Services
            </a>
          </li>
          <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
            <a href="#team" onClick={() => setHide(false)}>
              Why Team 99
            </a>
          </li>
          <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
            Reviews
          </li>
          <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
            FAQ
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="https://wa.me/923216561397"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Buttons>Chat Now</Buttons>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="absolute top-8 right-14 cursor:pointer hidden max-lg:flex z-100"
        onClick={() => setHide(!hide)}
      >
        <RiMenuFoldFill
          className={`absolute text-amber-500 text-4xl ${
            hide ? "hidden" : "block"
          }`}
        />
        <RiMenuFold4Fill
          className={`absolute text-amber-500 text-4xl ${
            hide ? "block" : "hidden"
          }`}
        />
      </button>
    </>
  );
}
