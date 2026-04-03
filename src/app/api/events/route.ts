import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      where: { published: true },
      orderBy: { date: "asc" },
    });

    return NextResponse.json({ events });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { title, type, description, date, time, speaker, free } = data;

    if (!title || !type || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        title,
        type,
        description: description || "",
        date: new Date(date),
        time: time || "",
        speaker: speaker || "",
        free: free ?? true,
        published: true,
      },
    });

    return NextResponse.json({ event }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
