import { connectToDatabase } from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
    }

    await connectToDatabase();
    const user = await Registration.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: "Participant not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error", error: error.message }), {
      status: 500,
    });
  }
}
