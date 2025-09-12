import React from "react";
import Buttons from "./Buttons";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-3">
      <ul>
        <li className="text-white text-2xl font-bold">Team 99</li>
      </ul>
      <ul className="flex gap-10">
        <li className="text-white text-xl hover:text-amber-500 transition-all duration-150 hover:cursor-pointer">
          Clients
        </li>
        <li className="text-white text-xl hover:text-amber-500 transition-all duration-150 hover:cursor-pointer">
          Services
        </li>
        <li className="text-white text-xl hover:text-amber-500 transition-all duration-150 hover:cursor-pointer">
          Why Team 99
        </li>
        <li className="text-white text-xl hover:text-amber-500 transition-all duration-150 hover:cursor-pointer">
          Reviews
        </li>
        <li className="text-white text-xl hover:text-amber-500 transition-all duration-150 hover:cursor-pointer">
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
