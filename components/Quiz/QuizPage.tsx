"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"


type Questions = {
  id: string;
  question: string;
  options: string[] | null;
  quizId: string;
  answer: string;
  userAnswer?: string | null;
};

type Props = {
  questions: Questions[] | null;
};

const QuizPage = ({ questions }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const router = useRouter();
  const { toast } = useToast()

  const question = questions ? questions[currentIndex] : null;

  const handleNext = () => {
    if (currentIndex < (questions?.length || 0) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Quiz Submitted",
      description: "You have successfully completed the quiz.",
    });
    router.push("/thank-you");
  };

  const handleAnswerSelection = (answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = answer;
    setUserAnswers(updatedAnswers);
    console.log(userAnswers);
  };

  if (!question) return <div>No Questions Available</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-3xl p-4">
        <CardHeader>
          <CardTitle>{`Question ${currentIndex + 1}`}</CardTitle>
          <CardDescription>{question.question}</CardDescription>
        </CardHeader>

        <CardContent>
          {question.options?.map((option, idx) => (
            <div
              key={idx}
              className={`p-2 border rounded-md cursor-pointer my-2 ${
                userAnswers[currentIndex] === option ? "bg-blue-200" : ""
              }`}
              onClick={() => handleAnswerSelection(option)}
            >
              {option}
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <Button onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
            {currentIndex === (questions?.length || 0) - 1 ? (
              <Button onClick={handleSubmit} className="bg-green-500">
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizPage;
