"use client";
import React, { useState } from "react";
import { questions } from "@/lib/data";
import Confetti from "react-confetti-boom";
import Stopwatch from "@/components/Timer";

const Page = () => {
  const [number, Setnumber] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [Reason, setReason] = useState<String>("");
  const [score, setscore] = useState<number>(0);
  const checkanswer = (answerIndex: number) => {
    let correctAnswers = questions[number].answer;
    console.log(correctAnswers);
    if (correctAnswers.includes(answerIndex)) {
      setIsExploding(true);
      setSelectedAnswer(answerIndex);
      const index =correctAnswers.indexOf(answerIndex);
      if (index !== -1) {
       correctAnswers.splice(index, 1);
     }
     if(correctAnswers.length==0)
      {
        setscore(score + 1); 
        setReason("Correct answer! Click on Next");
      }
      else
      {
        setReason("Correct answer! Choose one more");
      }
     
    } else {
      setReason("Incorrect answer! Moving to Next question");
      setTimeout(() => {
        Setnumber(number + 1);
        setSelectedAnswer(null);
        setReason("");
      }, 2000);
      setIsExploding(false);
      setSelectedAnswer(answerIndex);
    }
  };

  const goToNextQuestion = () => {
    Setnumber(number + 1);
    setSelectedAnswer(null);
    setIsExploding(false);
    setReason(""); // Reset selectedAnswer when moving to the next question
  };

  return (
    <div className="text-white p-12">
      <div>
        {isExploding && <Confetti mode={"fall"} />}
        <div className="flex items-end justify-between">
          <p>
            {number+1}.{questions[number].question}
          </p>
          <div>
            <Stopwatch />
            {score}/65
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 p-3 justify-left items-start">
          <button onClick={() => checkanswer(0)} className="p-3">
            {questions[number].option[0]}
          </button>
          <button onClick={() => checkanswer(1)} className="p-3">
            {questions[number].option[1]}
          </button>
          <button onClick={() => checkanswer(2)} className="p-3">
            {questions[number].option[2]}
          </button>
          <button onClick={() => checkanswer(3)} className="p-3">
            {questions[number].option[3]}
          </button>
          <p className={isExploding ? "text-green-500" : "text-red-500"}>
            {Reason}
          </p>
        </div>
      </div>

      <button
        onClick={goToNextQuestion}
        className="absolute right-12 bottom-12 text-pink-500 text-xl font-semibold"
      >
        Next ={">"}
      </button>
    </div>
  );
};

export default Page;
