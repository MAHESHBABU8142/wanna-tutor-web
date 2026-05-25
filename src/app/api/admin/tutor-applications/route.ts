import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "Admin")
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );

  return NextResponse.json(
    { success: true, message: "Success", data: ["mah"] },
    { status: 200 },
  );
}
