// app/quizzes/page.tsx

import React from "react";
import UserQuizzes from "@/components/History/UserQuizzes";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";


const QuizzesPage = async() => {
    const session= await getAuthSession();
    if(!session?.user)
    {
        redirect("/");
    }
    const recent= await prisma.score.findMany({
        where:{
            userId: session?.user.id,
        },
        include:{
            quiz: true,
        },
    });
  return (
    <div>
      <UserQuizzes recent={recent} />
    </div>
  );
};

export default QuizzesPage;
