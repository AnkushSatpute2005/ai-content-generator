"use client"
import { Search } from "lucide-react";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession()

//   if (session) {
//     return (
//       <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
//     <div className="flex items-center gap-2 p-2 border rounded-md max-w-lg bg-white">
//       <Search />
//       <input type="text" placeholder="Search..." className="outline-none " />
//     </div>
//     <div className="flex gap-2 justify-between items-center ">
//       <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">{session.user.email}</h2>
//       <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full" onClick={() => signOut()}>signOut</button>
//     </div>
//   </div>
// );
//   } else {
//     return (
//       <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
//     <div className="flex items-center gap-2 p-2 border rounded-md max-w-lg bg-white">
//       <Search />
//       <input type="text" placeholder="Search..." className="outline-none " />
//     </div>
//     <div className="flex gap-2 justify-between items-center ">
//       {/* <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">{session.user.email}</h2> */}
//       <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full" onClick={() => signIn()}>Login</button>
//       <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full" onClick={() => signOut()}>signOut</button>
//     </div>
//   </div>
// );
//   }

return (
  <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
<div className="flex items-center gap-2 p-2 border rounded-md max-w-lg bg-white">
  <Search />
  <input type="text" placeholder="Search..." className="outline-none " />
</div>
<div className="flex gap-2 justify-between items-center ">
 { session ? <h2 className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 p-1 rounded-full text-xs text-white px-2">{session.user.email}</h2>:<Link href={"/login"}><button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">Login</button></Link>}
  <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full" onClick={() => signOut()}>Sign out</button>
</div>
</div>
);
   
}

export default Header;
