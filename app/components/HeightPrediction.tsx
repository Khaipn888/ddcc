"use client";

import React, { useState, useEffect, useCallback } from "react";
import ScoringScreen from "../ScoringScreen";
import QuestionScreen from "../QuestionScreen";

const questions = [
  {
    question:
      "Phát Tài và Phát Lộc là hai anh em sinh đôi cùng trứng, cùng nằm trong bụng mẹ suốt 9 tháng 10 ngày.\n Khi đi siêu âm, bác sĩ bảo rằng Lộc dài hơn Tài 1 cm. Đến ngày sinh, Tài ra trước, Lộc ra sau đúng 5 phút. Sau khi lớn lên, cả hai đều rất khỏe mạnh, ăn uống đầy đủ, tập thể dục đều đặn và ngủ đúng giờ. Hiện Lộc cao 1m86 hỏi Tài cao bao nhiêu?",
    answer: "1m83",
  },
  {
    question:
      "Gia đình bé Tuấn Anh có bố cao 1m65, mẹ cao 1m55. Cả hai đều mong con mình sẽ cao hơn, khỏe hơn, sống thật cao thượng và có tinh thần cầu tiến cao. Bé Tuấn Anh hiện nay mới 3 tuổi, cao 1m05 nhưng luôn tự hào rằng mình sẽ cao bằng bố trong năm tới, thậm chí còn cao hơn nếu chăm tập thể dục và đặt mục tiêu cao hơn mỗi ngày..",
    answer: "9 chữ “cao”",
  },
  {
    question: "Anh Huy là một người đàn ông trưởng thành và có một lối sống vô cùng lành mạnh. Hàng ngày, anh thức dậy vào lúc 5 giờ 30, dành khoảng 20 phút để tập thể dục nhẹ như chạy bộ và đạp xe. Sau đó là bữa sáng đầy đủ dinh dưỡng với rau xanh, trứng và ngũ cốc, cung cấp năng lượng cho cả ngày làm việc. Buổi tối, anh hạn chế sử dụng thiết bị điện tử và đi ngủ trước 22 giờ để đảm bảo giấc ngủ đủ sâu, giúp cơ thể phục hồi và tái tạo năng lượng cho ngày mới. Hỏi người yêu anh Huy cao bao nhiêu? Biết rằng là người yêu của anh Huy là cô gái hay mộng mơ",
    answer:
      "Cao 1m52",
  },
  {
    question: "Một gia đình có bố làm IT, mẹ làm Dược sĩ. Hỏi con cao bao nhiêu?",
    answer:
      "",
  },
];

const HeightPrediction = () => {
  const [screen, setScreen] = useState<"scoring" | "questions">("scoring");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isQuestion2Blurred, setIsQuestion2Blurred] = useState<boolean | null>(null);

  const handleNextStep = useCallback(() => {
    if (screen === "scoring") {
      setScreen("questions");
      return;
    }

    if (screen === "questions") {
      if (!showAnswer && currentQuestionIndex !== 3) {
        setShowAnswer(true);
      } else {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setShowAnswer(false);
          setIsQuestion2Blurred(null);
        } else {
          // Finish
          setScreen("scoring");
          setCurrentQuestionIndex(0);
          setShowAnswer(false);
        }
      }
    }
  }, [screen, showAnswer, currentQuestionIndex]);

  const handlePreviousStep = useCallback(() => {
    if (screen === "questions") {
      if (showAnswer) {
        setShowAnswer(false);
      } else {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
          setShowAnswer(currentQuestionIndex - 1 !== 3);
          setIsQuestion2Blurred(null);
        } else {
          // Back to scoring screen
          setScreen("scoring");
        }
      }
    }
  }, [screen, showAnswer, currentQuestionIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentQuestionIndex === 1) {
        if (event.key === "ArrowUp") {
          setIsQuestion2Blurred(true);
          return;
        } else if (event.key === "ArrowDown") {
          setIsQuestion2Blurred(false);
          return;
        }
      }
      if (event.key === "ArrowRight") {
        handleNextStep();
      } else if (event.key === "ArrowLeft") {
        handlePreviousStep();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextStep, handlePreviousStep, currentQuestionIndex]);

  return (
    <div className="w-full max-w-5xl">
      {screen === "scoring" ? (
        <ScoringScreen />
      ) : (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          showAnswer={showAnswer}
          isQuestion2Blurred={isQuestion2Blurred}
        />
      )}
    </div>
  );
};

export default HeightPrediction;
