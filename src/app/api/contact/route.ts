import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, message } = await req.json();

    if (!name || !email || !topic || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const contact = await prisma.contact.create({
      data: { name, email, topic, message },
    });

    return NextResponse.json({ contact, message: "Message sent successfully" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ contacts });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
