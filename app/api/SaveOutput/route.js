import { NextResponse } from "next/server"; 
import mongoose from "mongoose";
import AiOutput from "@/lib/models/AiOutput";

export async function POST(req) {
  try {
    // Parse the request body
    const { formData, aiOutput,slug } = await req.json();
    if (!formData || !aiOutput||!slug) {
      console.error("Missing formData or aiOutput");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await mongoose.connect("mongodb://localhost:27017/AiContentGenerator");

    // Create and save data to MongoDB
    const newData = new AiOutput({ formData, aiOutput,slug });
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
  }
}
