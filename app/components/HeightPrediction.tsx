"use client";

import React, { useState } from "react";
import ScoringScreen from "../ScoringScreen";
import QuestionScreen from "../QuestionScreen";

const questions = [
  {
    question: "Chiều cao của bố và mẹ bạn là bao nhiêu?",
    answer: "Chiều cao của bố mẹ ảnh hưởng khoảng 23% đến chiều cao của bạn.",
  },
  {
    question: "Chế độ dinh dưỡng của bạn trong giai đoạn dậy thì như thế nào?",
    answer:
      "Dinh dưỡng là yếu tố quan trọng nhất, chiếm tới 32%. Một chế độ ăn đủ canxi, vitamin D, protein sẽ giúp phát triển chiều cao tối ưu.",
  },
  {
    question: "Bạn có thường xuyên vận động, chơi thể thao không?",
    answer:
      "Vận động chiếm 20% khả năng phát triển chiều cao. Các môn thể thao như bơi lội, bóng rổ, yoga rất tốt cho việc tăng trưởng.",
  },
  {
    question: "Bạn có ngủ đủ giấc và ngủ sâu không?",
    answer:
      "Giấc ngủ chiếm một phần quan trọng. Hormone tăng trưởng được tiết ra nhiều nhất khi bạn ngủ sâu, đặc biệt là từ 10 giờ tối đến 2 giờ sáng.",
  },
];

const HeightPrediction = () => {
  const [screen, setScreen] = useState<"scoring" | "questions">("scoring");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleStart = () => {
    setScreen("questions");
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    }
  };

  const handleFinish = () => {
    // Reset to the beginning
    setScreen("scoring");
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
  };

  return (
    <div className="w-full max-w-2xl">
      {screen === "scoring" ? (
        <ScoringScreen onStart={handleStart} />
      ) : (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          showAnswer={showAnswer}
          onShowAnswer={handleShowAnswer}
          onNextQuestion={handleNextQuestion}
          onFinish={handleFinish}
        />
      )}
    </div>
  );
};

export default HeightPrediction;