/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Timer } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type quiztype = {
  id: string;
  topic: string;
  description: string;
  image: string;
  noq: number;
  duration: string;
};

type Props = {
  quiz: quiztype[];
};

const QuizCard = ({ quiz }: Props) => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {quiz.map((quiz) => (
          <Dialog key={quiz.id}>
            <DialogTrigger asChild>
              <Card className="col-span-1 rounded-md cursor-pointer">
                {/* Quiz Image */}
                <img
                  src={quiz.image}
                  alt={quiz.topic}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                {/* Quiz Header */}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {quiz.topic}
                  </CardTitle>
                  <CardDescription>{quiz.description}</CardDescription>
                </CardHeader>

                {/* Quiz Content */}
                <CardContent>
                  {quiz.noq} Questions
                  <span className="float-right flex items-center">
                    <Timer className="mr-1" />
                    Time: {quiz.duration} min
                  </span>
                </CardContent>
              </Card>
            </DialogTrigger>

            {/* Dialog Content */}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ready to start the quiz?</DialogTitle>
                <DialogDescription>
                  You are about to start <strong>{quiz.topic}</strong>. Make sure
                  you are ready because this quiz will have {quiz.noq} questions and
                  will take approximately {quiz.duration} minutes.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex justify-end">
                <Link href={`/quiz/${quiz.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Start Quiz
                  </button>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
