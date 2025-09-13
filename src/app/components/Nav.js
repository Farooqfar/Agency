import React from "react";
import Buttons from "./Buttons";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-3 bg-white/12">
      <ul>
        <li className="text-white hover:text-pink-500 text-2xl font-bold">
          Team 99
        </li>
      </ul>
      <ul className="flex gap-10">
        <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
          Clients
        </li>
        <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
          Services
        </li>
        <li className="relative text-white hover:text-pink-500 rounded text-xl transition-all duration-300 hover:cursor-pointer before:absolute before:content-[''] before:w-[0%] hover:before:w-[100%] before:h-1 before:bg-pink-500 before:top-8 before:left-0 before:transition-all before:duration-300">
          Why Team 99
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
          <Buttons>Chat Now</Buttons>
        </li>
      </ul>
    </nav>
  );
}
