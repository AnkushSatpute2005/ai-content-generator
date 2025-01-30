import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../auth/[...nextauth]/route";
import mongoose from "mongoose";
import AiOutput from "@/lib/models/AiOutput";
// import connectToDatabase from "@/lib/db";
import dbConnect from "@/lib/db";
// import { useSession } from "next-auth/react";

export async function POST(req) {
  
  try {
    // Parse the request body
    const { formData, aiOutput,slug,name,image,email} = await req.json();
   
    if (!formData || !aiOutput||!slug||!name||!image||!email) {
      console.error("Missing formData or aiOutput");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    // if (!email) {
    //   return res.status(400).json({ message: "Email is required" });
    // }else{
    //   console.log("Email is present" ,email)
    // }
 
    // await mongoose.connect(process.env.DATABASE_URL);
    await dbConnect();

    // Create and save data to MongoDB
    const newData = new AiOutput({ 
      email,
       name,
       image,
       formData,
       aiOutput,
       slug, 
      });
   
    await newData.save();

    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST API:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  } finally {
    // Disconnect from DB
    await mongoose.disconnect();
    // mongoose.connection.close()
  }
}
