import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const where = {
      published: true,
      ...(category ? { category } : {}),
    };

    const courses = await prisma.course.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ courses });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { slug, title, description, category, price, duration, level, modules } = data;

    if (!slug || !title || !category || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const course = await prisma.course.create({
      data: {
        slug,
        title,
        description: description || "",
        category,
        price,
        duration: duration || "",
        level: level || "Beginner",
        modules: JSON.stringify(modules || []),
        published: true,
      },
    });

    return NextResponse.json({ course }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
