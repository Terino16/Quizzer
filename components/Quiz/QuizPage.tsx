"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { JsonValue } from "@prisma/client/runtime/library";

type Questions = {
  id: string;
  question: string;
  answer: string;
  quizId: string;
  options: JsonValue | null;
};

type Props = {
  questions: Questions[] | null;
  quizId: string;
};

const QuizPage = ({ questions, quizId }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null); 
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false); 
  const [timeStarted, setTimeStarted] = useState<Date | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const question = questions ? questions[currentIndex] : null;

  useEffect(() => {
  
    const startTime = new Date();
    setTimeStarted(startTime);
  }, []);

  const handleNext = () => {
    setFeedback(null);
    setCorrectAnswer(null); 
    setHasSubmittedAnswer(false); 
    if (currentIndex < (questions?.length || 0) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };



  const handleAnswerSelection = (answer: string) => {
    if (!hasSubmittedAnswer) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentIndex] = answer.trim(); 
      setUserAnswers(updatedAnswers);
  
      const userAnswer = `"${answer.trim()}"`; 
      const correctAnswer = typeof question?.answer === "string"
        ? question?.answer.trim()
        : String(question?.answer).trim();
  
      console.log("User Answer with quotes:", userAnswer);
      console.log("Correct Answer:", correctAnswer);
  
      if (userAnswer === correctAnswer || answer.trim()===correctAnswer) {
        setScore((prevScore) => prevScore + 1);
        setFeedback("Correct!");
      } else {
        setFeedback("Incorrect!");
      }
  
      setCorrectAnswer(correctAnswer);
      setHasSubmittedAnswer(true); 
    }
  };
  
  
  

  const handleSubmit = async () => {
    try {
      // Send the quiz score and timeStarted to the server
      await axios.post("/api/submit-quiz", {
        quizId,
        score,
        timeStarted,
      });

      toast({
        title: "Quiz Submitted",
        description: `You scored ${score} points!`,
      });
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting quiz:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your quiz.",
      });
    }
  };

  if (!questions || questions.length === 0) {
    return <div>No Questions Available</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-3xl p-4 border-none">
        <CardHeader>
          <CardTitle>{`Question ${currentIndex + 1}`}</CardTitle>
          <CardDescription>{question?.question}</CardDescription>
        </CardHeader>

        <CardContent>
          {Array.isArray(question?.options) &&
            question?.options.map((option, idx) => (
              <div
                key={idx}
                className={`p-2 border rounded-md cursor-pointer my-2 ${
                  userAnswers[currentIndex] === option ? "bg-blue-200" : ""
                }`}
                onClick={() =>
                  typeof option === "string" && handleAnswerSelection(option)
                }
              >
                {option?.toString()}
              </div>
            ))}

          {/* Feedback Message */}
          {feedback && (
            <div
              className={`mt-4 text-lg font-semibold ${
                feedback === "Correct!" ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedback}
            </div>
          )}

          {/* Display Correct Answer after submission */}
          {correctAnswer && (
            <div className="mt-2 text-md text-gray-500">
              The correct answer is:{" "}
              <span className="font-bold text-black dark:text-white">{correctAnswer}</span>
            </div>
          )}

          <div className="flex justify-between mt-4">
            {currentIndex === (questions?.length || 0) - 1 ? (
              <Button onClick={handleSubmit} className="bg-green-500">
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={!hasSubmittedAnswer}>
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Display Score */}
      <div className="mt-4 text-lg">
        Score: {score} / {questions?.length}
      </div>
    </div>
  );
};

export default QuizPage;
