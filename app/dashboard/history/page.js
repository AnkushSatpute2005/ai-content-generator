"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";

const History = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiOutputLen, setAiOutputLen] = useState(0)

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/history");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const items = await response.json();
      setData(items);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
      data.map((item)=>(setAiOutputLen(aiOutputLen+item.aiOutput.length)))
      // console.log(aiOutputLen)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Returns the date in the format "MM/DD/YYYY" (based on user's locale)
  };

  return (
    <div className="h-screen p-5">
      <div className="flex justify-between items-center p-2">
        <div>
        <h1 className="text-3xl font-bold">History</h1>
        <p className="text-gray-500">Search your previously generated AI content</p>
        </div>
        <Button onClick={getData} disabled={loading}>{loading&&<Loader2Icon className="animate-spin"/>}Refresh Data</Button>
        {/* <button onClick={getData}>Refresh Data</button> */}
      </div>
      <div className="relative shadow-md sm:rounded-lg p-5 bg-gray-300">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          {/* border-separate is used to enable space between table rows */}
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="text-center rounded-sm">
              <th scope="col" className="px-6 py-3">
                TEMPLATE
              </th>
              <th scope="col" className="px-6 py-3">
                AI RESPONSE
              </th>
              <th scope="col" className="px-6 py-3">
                DATE
              </th>
              <th scope="col" className="px-6 py-3">
                WORDS
              </th>
              <th scope="col" className="px-6 py-3">
                EDITS
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item) => (
              
              <tr
                key={item._id}
                className="bg-white border-b dark:border-gray-700 border-gray-200 dark:hover:bg-gray-600 "
              >
                <th
                  scope="row"
                  className="p-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white h-32 flex flex-row justify-center items-center gap-2"
                >
                  <Image src={item.image} alt="image" height={30} width={30} />
                  {item.name}
                </th>
                <td className="px-6 py-4 max-h-24 overflow-hidden">
                  {item.aiOutput}
                </td>
                <td className="px-6 py-4">{formatDate(item.createdAt)}</td>
                <td className="px-6 py-4"> {item.aiOutput.length}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
             
            ))}
             
          </tbody>
        </table>
      </div>
    </div>
   
  );
};

export default History;
