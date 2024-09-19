"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserScoreDonutChart } from "./UserScoreDonutChart";

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
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Your Completed Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recent.map((quiz) => (
          <Card key={quiz.id} className="col-span-1 rounded-md">
            <CardHeader>
              <CardTitle>{quiz.quiz.topic}</CardTitle>
              <CardDescription>
                Score: {quiz.score}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Started: {new Date(quiz.timeStarted).toLocaleString()}
              </p>
              {quiz.timeEnded && (
                <p>Ended: {new Date(quiz.timeEnded).toLocaleString()}</p>
              )}

<UserScoreDonutChart score={8} totalQuestions={10} />

    
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserQuizzes;
