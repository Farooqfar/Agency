"use client";
import { GridLoader } from "react-spinners";

export default function ClientLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <GridLoader
        color="#22c55e"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
