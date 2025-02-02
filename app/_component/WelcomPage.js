import Image from "next/image";
import Link from "next/link";
import React from "react";

const WelcomPage = () => {
  return (
    <div className="  h-fit w-screen text-white flex flex-col justify-center items-center">
      {/* <h2 className='font-bold text-3xl'>Welcom</h2>
            <h3 className='font-bold text-3xl p-3'>to</h3> */}
      {/* <h1 className='font-bold lg:text-8xl p-5 m-10 sm:text-4xl'>AI Containtent Generator</h1> */}
      <div className="flex justify-center items-center gap-2 h-52 text-7xl ">
        <span className="text-black">AI Containtent</span>
        <span className="text-purple-800 font-bold">Generator</span>
      </div>

      <Link href={"/dashboard"}>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Get Start &gt;
          </span>
        </button>
      </Link>
    </div>
  );
};

export default WelcomPage;
