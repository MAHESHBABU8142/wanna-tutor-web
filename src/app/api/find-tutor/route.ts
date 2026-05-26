import { NextResponse } from "next/server";
import { parentApplicationCollection } from "@/lib/db";
export async function POST(req: Request) {
  try {
  
    const body = await req.json();
    //data validation
    if (
      !body.requesterType ||
      !body.fullName ||
      !body.phone ||
      !body.grade ||
      !body.preferredMode
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }
    const application = {
      full_name: body.fullName,
      phone: body.phone,
      email: body.email || null,
      grade: body.grade,
      preferred_mode: body.preferredMode,
      created_at: new Date(),
    };
    //insert data into db

    const result = await parentApplicationCollection.insertOne(application);

    if (!result.acknowledged) {
      return NextResponse.json(
        { success: false, message: "Failed to save application." },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { success: true, message: "Form submitted successfully!" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 },
    );
  }
}
