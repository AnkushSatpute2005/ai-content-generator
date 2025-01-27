"use client"
import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";

const layout = ({ children }) => {

  const [usage, setUsage] = useState(0)

  
  return (
    <TotalUsageContext.Provider value={{usage, setUsage}}>
      <div className="bg-slate-100 ">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
    </TotalUsageContext.Provider>
  );
};

export default layout;
