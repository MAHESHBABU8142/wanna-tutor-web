import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { parentApplicationCollection } from "@/lib/db";

export async function GET() {
  //check if user is admin
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "Admin")
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );

  const data = await parentApplicationCollection.find({}).toArray();
  const parentApplications = data.map((doc) => {
    return {
      id: doc._id,
      name: doc.full_name,
      phone: doc.phone,
      email: doc.email,
      grade: doc.grade,
      preferredMode: doc.preferred_mode,
      createdAt: doc.created_at,
    };
  });

  return NextResponse.json(
    {
      success: true,
      message: "Success",
      data: parentApplications,
    },
    { status: 200 },
  );
}
