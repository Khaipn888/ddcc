import React from "react";

interface ScoringScreenProps {
  onStart: () => void;
}

const ScoringScreen: React.FC<ScoringScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-4">
        Barem điểm - Dự đoán chiều cao
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Chào mừng bạn đến với bài trắc nghiệm dự đoán chiều cao. Hãy trả lời các
        câu hỏi để xem kết quả nhé!
      </p>
      <button
        onClick={onStart}
        className="w-full bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
      >
        Bắt đầu
      </button>
    </div>
  );
};

export default ScoringScreen;