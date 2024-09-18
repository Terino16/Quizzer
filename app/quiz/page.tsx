import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
// import { prisma } from "@/lib/db";
import QuizCard from "@/components/Quiz/QuizCard";

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
  //const quiz = await prisma.quiz.findMany();

  // Log the quizzes to see their structure
  const quiz=[
    {
      id: '1234',
      topic: 'WildLife',
      description: 'NPTEL quiz for WildLife Ecology',
      image: 'https://forestandwildlifeecology.wisc.edu/wp-content/uploads/sites/111/2017/05/Bobcat_Photo-credit-Herbert-Lange_WDNRFlickr-1024x691.jpg',
      noq: 5,
      duration: '5'
    },
    {
      id: '1235',
      topic: 'Finance Sector',
      description: 'NPTEL quiz on Finance Sector in India',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNybe4KV8M69d9lN4CAICq5vgl_uuK87zWg&s',
      noq: 5,
      duration: '10'
    }
  ]
  console.log(quiz);

  return <QuizCard quiz={quiz}/>;
};

export default Quiz;
