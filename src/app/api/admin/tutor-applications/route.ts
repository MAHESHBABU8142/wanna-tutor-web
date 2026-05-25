import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { tutorApplicationCollection } from "@/lib/db";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "Admin")
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );

  const data = await tutorApplicationCollection.find({}).toArray();
  const tutorApplications = data.map((doc) => {
    return {
      id: doc._id,
      name: doc.full_name,
      phone: doc.phone,
      email: doc.email,
      teachingMode: doc.teaching_mode,
      createdAt: doc.created_at,
    };
  });

  return NextResponse.json(
    {
      success: true,
      message: "Success",
      data: tutorApplications,
    },
    { status: 200 },
  );
}
