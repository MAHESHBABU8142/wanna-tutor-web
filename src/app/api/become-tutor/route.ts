import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    //data validation
    if (!body.fullName || !body.phone || !body.teachingMode) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }
    const application = {
      full_name: body.fullName,
      phone: body.phone,
      email: body.email || null,
      teaching_mode: body.teachingMode,
      created_at: new Date(),
    };
    //insert data into db
    const client = await clientPromise;
    const db = client.db("wanna_tutor_prod");
    const result = await db
      .collection("tutor_applications")
      .insertOne(application);

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
