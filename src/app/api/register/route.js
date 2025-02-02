import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function POST(req) {
  try {
    const { name, email, course, branch, college, contact, event } = await req.json();

    await connectToDatabase();

    // Check if email already exists
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const newRegistration = new Registration({
      name,
      email,
      course,
      branch,
      college,
      contact,
      event,
    });

    await newRegistration.save();

    return NextResponse.json({ message: "Registration successful" }, { status: 201 });
  } catch (error) {
    console.error("Registration Error:", error);
    
    if (error.code === 11000) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    return NextResponse.json({ error: "Failed to register" }, { status: 500 });
  }
}
