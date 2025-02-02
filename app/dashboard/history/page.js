"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { useSession, signIn, signOut, } from "next-auth/react";

const History = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiOutputLen, setAiOutputLen] = useState(0);
  const { data: session } = useSession();

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
      data.map((item) => setAiOutputLen(aiOutputLen + item.aiOutput.length));
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
      
<div className="overflow-x-auto">
  
  {!loading && session? (
    <table className="w-full">
      <thead>
        <tr className="flex justify-between items-center p-2">
          <td>
            <h1 className="text-3xl font-bold">History</h1>
            <p className="text-gray-500">
              Search your previously generated AI content
            </p>
          </td>
          <td>
            <Button onClick={getData} disabled={loading}>
              {loading && <Loader2Icon className="animate-spin" />}
              Refresh Data
            </Button>
          </td>
        </tr>
      </thead>
      <tbody className="flex flex-col bg-gray-300 p-4 rounded-lg shadow-md">
        <tr className="hidden sm:flex sm:flex-row items-center text-gray-700 text-sm font-bold uppercase">
          <td className="m-4 w-2/5">Template</td>
          <td className="m-4 line-clamp-3 w-3/5">AI Response</td>
          <td className="m-4 w-1/5">Date</td>
          <td className="m-4 w-1/5">Words</td>
          <td className="m-4 w-1/5"></td>
        </tr>
        {data.map((item) => (
          <tr
            key={item._id}
            className="flex flex-col sm:flex-row justify-center items-center text-gray-600 bg-white hover:bg-gray-50 font-semibold"
          >
            <td className="m-4 w-full sm:w-2/5 flex items-center gap-2">
              <Image
                src={item.image}
                alt="image"
                height={30}
                width={30}
              />
              {item.name}
            </td>
            <td className="m-4 line-clamp-3 w-full sm:w-3/5">
              {item.aiOutput}
            </td>
            <td className="m-4 w-full sm:w-1/5">{formatDate(item.createdAt)}</td>
            <td className="m-4 w-full sm:w-1/5">{item.aiOutput.split(" ").filter(word => word !== "").length}</td>
            <td className="m-4 w-full sm:w-1/5 " onClick={()=>(navigator.clipboard.writeText(item.aiOutput))}><Button>Copy</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div>{loading&&<Loader2Icon className="animate-spin" />}
    <h1>User Not login...</h1>
      </div>
  )}
</div>

    </div>
  );
};

export default History;
