import dbConnect from "@/lib/db";
import AiOutput from "@/lib/models/AiOutput";

export async function GET() {
    try {
      await dbConnect();
      const items = await AiOutput.find({});
      return new Response(JSON.stringify(items), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      return new Response(
        JSON.stringify({ message: "Internal server error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  