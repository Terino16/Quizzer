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
  image: string | null;
  noq: number;
  duration: string;
};

type Props = {
  quiz: quiztype[];
};

const QuizCard = ({ quiz }: Props) => {
  return (
    <div className="h-screen p-8 pt-28  ">           
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quiz.map((quiz) => (
          <Dialog key={quiz.id}>
            <DialogTrigger asChild>
              <Card className="col-span-1 rounded-md cursor-pointer">
                {/* Quiz Image */}
                <img
                  src={quiz.image ?? "/default-image.png"}
                  alt={quiz.topic}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                {/* Quiz Header */}
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {quiz.topic}
                  </CardTitle>
                  <CardDescription >{quiz.description}</CardDescription>
                </CardHeader>

                {/* Quiz Content */}
                <CardContent className="">
                  {quiz.noq} Questions
                  <span className="float-right flex items-center">
                   
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
