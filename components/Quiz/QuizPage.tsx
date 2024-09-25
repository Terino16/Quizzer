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
import axios from "axios"; // For API calls to store score
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
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null); // Track the correct answer
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false); // Prevent re-answering after submission
  const [timeStarted, setTimeStarted] = useState<Date | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const question = questions ? questions[currentIndex] : null;

  useEffect(() => {
    // Record the start time when the component mounts
    const startTime = new Date();
    setTimeStarted(startTime);
  }, []);

  const handleNext = () => {
    setFeedback(null);
    setCorrectAnswer(null); // Reset the correct answer
    setHasSubmittedAnswer(false); // Allow answering the next question
    if (currentIndex < (questions?.length || 0) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    setFeedback(null);
    setCorrectAnswer(null); // Reset the correct answer
    setHasSubmittedAnswer(false); // Allow answering the previous question
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAnswerSelection = (answer: string) => {
    if (!hasSubmittedAnswer) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentIndex] = answer;
      setUserAnswers(updatedAnswers);

      // Check if the answer is correct and update score
      if (answer === question?.answer) {
        setScore((prevScore) => prevScore + 1);
        setFeedback("Correct!");
      } else {
        setFeedback("Incorrect!");
      }

      // Set the correct answer
      setCorrectAnswer(question?.answer || "");
      setHasSubmittedAnswer(true); // Prevent further answering for the current question
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
            <Button onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
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
