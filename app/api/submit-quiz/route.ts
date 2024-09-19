// app/api/submit-quiz/route.ts
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/nextauth";

export async function POST(request: Request) {
  const body = await request.json();
  const { quizId, score, timeStarted } = body; // Expect timeStarted to be passed in body

  // Get the current session to find the user
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.redirect("/");
  }

  try {
    // Store the score, time started, and time ended in the database
    await prisma.score.create({
      data: {
        quizId,
        userId: session.user.id, // User ID from the session
        score,
        timeStarted: new Date(timeStarted), // Converting the timeStarted to Date object
        timeEnded: new Date(), // Set timeEnded to current time
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving quiz score:", error);
    return NextResponse.json({ success: false, error: "Error saving quiz score" });
  }
}
