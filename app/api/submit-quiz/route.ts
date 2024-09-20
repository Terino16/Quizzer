// app/api/submit-quiz/route.ts
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/nextauth";

// This is the endpoint for submitting the quiz score
export async function POST(request: Request) {
  const body = await request.json();
  const { quizId, score, timeStarted } = body; // Expect timeStarted to be passed in body

  // Get the current session to find the user
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.redirect("/");
  }

  const userId= session.user.id;

  try {
    await prisma.score.create({
      data: {
        quizId,
        score,
        timeStarted: new Date(timeStarted),
        timeEnded: new Date(),
        userId: userId
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving quiz score:", error);
    return NextResponse.json({ success: false, error: "Error saving quiz score" });
  }
}
