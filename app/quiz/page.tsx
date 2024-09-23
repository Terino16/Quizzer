import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
// import { prisma } from "@/lib/db";
import QuizCard from "@/components/Quiz/QuizCard";
import { prisma } from "@/lib/db";

export const metadata = {
  title: "Quiz | Quizzzy",
  description: "Quiz yourself on anything!",
};

// interface Props {
//   searchParams: {
//     topic?: string;
//   };
// }

const Quiz = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  // Fetch all quizzes
  const quiz = await prisma.quiz.findMany();

  console.log(quiz);

  return <QuizCard quiz={quiz}/>;
};

export default Quiz;
