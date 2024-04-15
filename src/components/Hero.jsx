import React from "react";

export default function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df98] font-bold p-2">Grow with Data Analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast , flexible financing for
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500  ">
          Monitor your performance with Data Analytics solution.
        </p>
        <button className="bg-[#00df98] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}
