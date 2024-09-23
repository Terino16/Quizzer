

import QuizPage from "@/components/Quiz/QuizPage";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

const QuizDetail = async ({ params }: { params: { quizid: string } }) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  // Fetching questions from the database
  const questions = await prisma.question.findMany({
    where: {
      quizId: params.quizid,
    },
  });


  if (!questions || questions.length === 0) {
    return <div>No questions available for this quiz.</div>;
  }
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-white dark:bg-gray-950">
      <QuizPage questions={questions} quizId={params.quizid} />
    </div>
  );
};

export default QuizDetail;

