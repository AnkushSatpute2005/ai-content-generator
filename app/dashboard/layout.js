"use client"
import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditContext } from "../(context)/UpdateCreditUsageContext";


const layout = ({ children }) => {

  const [usage, setUsage] = useState(0)
  const [creditUsage,setCreditUsage] = useState(0)

  
  return (
    <TotalUsageContext.Provider value={{usage, setUsage}}>
      <UpdateCreditContext.Provider value={{creditUsage,setCreditUsage}}>
      <div className="bg-slate-100 ">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
      </UpdateCreditContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default layout;
