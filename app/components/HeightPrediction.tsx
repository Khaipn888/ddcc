"use client";

import React, { useState } from "react";
import ScoringScreen from "../ScoringScreen";
import QuestionScreen from "../QuestionScreen";

const questions = [
  {
    question:
      "Phát Tài và Phát Lộc là hai anh em sinh đôi cùng trứng, cùng nằm trong bụng mẹ suốt 9 tháng 10 ngày. Khi đi siêu âm, bác sĩ bảo rằng Lộc dài hơn Tài 1 cm. Đến ngày sinh, Tài ra trước, Lộc ra sau đúng 5 phút. Sau khi lớn lên, cả hai đều rất khỏe mạnh, ăn uống đầy đủ, tập thể dục đều đặn và ngủ đúng giờ. Hiện Lộc cao 1m86 hỏi Tài cao bao nhiêu?",
    answer: "1m83",
  },
  {
    question:
      "Gia đình bé Tuấn Anh có bố cao 1m65, mẹ cao 1m55. Cả hai đều mong con mình sẽ cao hơn, khỏe hơn, sống thật cao thượng và có tinh thần cầu tiến cao. Bé Tuấn Anh hiện nay mới 3 tuổi, cao 1m05 nhưng luôn tự hào rằng mình sẽ cao bằng bố trong năm tới, thậm chí còn cao hơn nếu chăm tập thể dục và đặt mục tiêu cao hơn mỗi ngày. Hỏi đoạn văn trên có bao nhiêu chữ “cao”",
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
    <div className="w-full max-w-5xl">
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
