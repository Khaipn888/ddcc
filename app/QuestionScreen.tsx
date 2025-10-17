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
  isQuestion2Blurred?: boolean | null;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  questionIndex,
  totalQuestions,
  showAnswer,
  isQuestion2Blurred,
}) => {
  const isSpecialQuestion = questionIndex === 1;
  const questionClassName = `text-gray-700 dark:text-gray-300 mb-6 min-h-[60px] text-justify transition-all duration-300 ${
    isSpecialQuestion && isQuestion2Blurred === true ? "blur-sm opacity-50" : ""
  }`;

  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-5xl text-center text-3xl">
      <h2 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-2">
        Câu hỏi {questionIndex + 1}
      </h2>
      {isSpecialQuestion && isQuestion2Blurred === false ? ( // Highlight "cao"
        <p
          className={questionClassName}
          dangerouslySetInnerHTML={{
            __html: question.question
              .replace(
                /cao/gi,
                '<span class="text-pink-500 font-bold">cao</span>'
              )
              .split(".")
              .filter((s) => s.trim())
              .map((s) => s.trim())
              .join(".<br/><br/>"),
          }}
        />
      ) : (
        <p className={questionClassName}>
          {question.question.split(".").map((sentence, index, array) => {
            if (!sentence.trim()) return null;
            return (
              <React.Fragment key={index}>
                {sentence.trim() + (index < array.length - 2 ? "." : "")}
                <br />
                <br />
              </React.Fragment>
            );
          })}
        </p>
      )}

      {showAnswer && (
        <div className="mb-6 p-4 bg-pink-50 dark:bg-gray-700 rounded-lg text-3xl flex justify-center items-center gap-5">
          <div className="font-semibold text-purple-800 dark:text-purple-200">
            Đáp án:
          </div>
          <div className="text-pink-600 dark:text-pink-400">{question.answer}</div>
        </div>
      )}
    </div>
  );
};

export default QuestionScreen;
