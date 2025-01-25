"use client"
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {useEffect} from "react";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    // console.log(path);
  },[])
  

  return (
    <div className=" relative h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logo.jpg"} alt="logo" width={100} height={100}  priority={true} className=""/>
      </div>
    <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu,index)=>(
          <Link href={menu.path} key={index}>
            <div  className={`flex gap-2 mb-2 p-3 hover:bg-gradient-to-br from-green-400 to-blue-600  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  font-medium rounded-lg px-5 py-2.5 hover:text-white  cursor-pointer 
            ${path==menu.path&& "bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-white font-medium rounded-lg px-5 py-2.5 hover:text-white  cursor-pointer" }
            `}>
                <menu.icon className="h-7 w-7"/>
                <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className=" absolute bottom-10 left-0 w-full">
      <UsageTrack/>
      </div>
    </div>
  );
};

export default SideNav;
