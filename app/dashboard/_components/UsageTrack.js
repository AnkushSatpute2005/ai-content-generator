"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditContext, UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useContext } from "react";
import { FaArrowUp } from "react-icons/fa6";

const UsageTrack = () => {
  const { usage, setUsage } = useContext(TotalUsageContext);
  // const [useUpdateCreditUsageContext, setUseUpdateCreditUsageContext] = useState(UpdateCreditUsageContext)
  const {creditUsage,setCreditUsage} = useContext(UpdateCreditContext)

  // useEffect(() => {
  //   getData();
  // }, [usage]);

  useEffect(() => {
    getData()
  }, [usage && creditUsage])
  

  const getData = async () => {
    try {
      const response = await fetch("/api/history");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const items = await response.json();
      let len = 0;
      items.map((item) => {
        // setLength(length+item.aiOutput.length)
        len += item.aiOutput.split(" ").filter((word) => word !== "").length;
      });
      setUsage(len);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="m-5">
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="bg-white h-3 w-full rounded-full mt-3 flex items-center p-1">
          <div
            className={`h-1.5 rounded-full ${
              usage >= 10000
                ? "animate-pulseRed"
                : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            }`}
            style={{
              width: (usage / 10000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className={`text-sm my-1 ${ usage >= 10000?"text-red-800 animate-bounce pt-3":"text-white"}`}>{usage}/10,000 Credit Used</h2>
      </div>

      {/* <Button className="w-full my-3 text-white">
        {usage >= 10000 && (
          <span>
            <FaArrowUp className="animate-bounce" />
          </span>
        )}
        Upgrade
      </Button> */}
    </div>
  );
};

export default UsageTrack;
