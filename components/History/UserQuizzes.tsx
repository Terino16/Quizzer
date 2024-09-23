"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserScoreDonutChart } from "./UserScoreDonutChart";
import { format, differenceInSeconds } from "date-fns"; // Import date-fns for consistent formatting and duration calculation

type QuizResult = {
  quiz: {
    id: string;
    topic: string;
    description: string;
    image: string | null;
    noq: number;
    duration: string;
  };
} & {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  timeStarted: Date;
  timeEnded: Date | null;
};

type Props = {
  recent: QuizResult[]; // Accept recent quizzes as a prop
};

const UserQuizzes = ({ recent }: Props) => {
  if (!recent || recent.length === 0) {
    return <div>No quizzes completed yet.</div>;
  }

  return (
    <div
      className="min-h-screen p-8 pt-28  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]  
    dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    >
      <h1 className="text-3xl font-bold mb-6">Your Completed Quizzes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {recent.map((quiz) => {
          // Calculate duration
          let duration = null;
          if (quiz.timeEnded) {
            const totalSeconds = differenceInSeconds(
              new Date(quiz.timeEnded),
              new Date(quiz.timeStarted)
            );
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            duration = `${minutes} min ${seconds} sec`;
          }

          return (
            <Card key={quiz.id} className="col-span-1 rounded-md">
              <UserScoreDonutChart
                score={quiz.score}
                totalQuestions={quiz.quiz.noq}
              />
              <CardHeader className="text-center">
                <CardTitle className=" text-sm md:text-[18px]">
                  {quiz.quiz.topic}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Format date as 'Date, Day, Month, Year' */}
                <p>
                  Date:{" "}
                  {format(new Date(quiz.timeStarted), "EEEE, do MMMM yyyy")}
                </p>
                <p>
                  Starting Time:{" "}
                  {format(new Date(quiz.timeStarted), "HH:mm:ss")}
                </p>

                {/* Display duration if available */}
                {duration && <p>Duration: {duration}</p>}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default UserQuizzes;
