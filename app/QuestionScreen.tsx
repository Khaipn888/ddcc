import React from "react";

interface Question {
  question: string;
  answer: string;
}

interface QuestionScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  showAnswer: boolean;
  onShowAnswer: () => void;
  onNextQuestion: () => void;
  onFinish: () => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  questionIndex,
  totalQuestions,
  showAnswer,
  onShowAnswer,
  onNextQuestion,
  onFinish,
}) => {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-2xl text-center">
      <h2 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-2">
        Câu hỏi {questionIndex + 1}/{totalQuestions}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 min-h-[60px]">
        {question.question}
      </p>

      {showAnswer && (
        <div className="mb-6 p-4 bg-pink-50 dark:bg-gray-700 rounded-lg">
          <h3 className="font-bold text-pink-600 dark:text-pink-400">Đáp án:</h3>
          <p className="text-gray-800 dark:text-gray-200">{question.answer}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {!showAnswer ? (
          <button
            onClick={onShowAnswer}
            className="bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Show đáp án
          </button>
        ) : questionIndex < totalQuestions - 1 ? (
          <button onClick={onNextQuestion} className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-300">Câu hỏi tiếp theo</button>
        ) : (
          <button onClick={onFinish} className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300">Hoàn thành</button>
        )}
      </div>
    </div>
  );
};

export default QuestionScreen;