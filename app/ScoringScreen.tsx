import React from "react";

interface ScoringScreenProps {
  onStart: () => void;
}

const ScoringScreen: React.FC<ScoringScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-8">
        Tiêu chí chấm điểm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-8">
        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-3">🤔</div>
          <h3 className="font-semibold text-lg text-purple-800 dark:text-purple-200">Hợp lý</h3>
          <p className="font-bold text-2xl text-purple-600 dark:text-purple-400">5đ</p>
        </div>
        <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-3">😂</div>
          <h3 className="font-semibold text-lg text-pink-800 dark:text-pink-200">Hài hước</h3>
          <p className="font-bold text-2xl text-pink-600 dark:text-pink-400">5đ</p>
        </div>
        <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-3">⚡️</div>
          <h3 className="font-semibold text-lg text-sky-800 dark:text-sky-200">Tốc độ</h3>
          <p className="font-bold text-2xl text-sky-600 dark:text-sky-400">5đ</p>
        </div>
      </div>
      <button
        onClick={onStart}
        className="w-full sm:w-auto bg-pink-500 text-white font-bold py-3 px-12 rounded-lg hover:bg-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 transform hover:scale-105"
      >
        Bắt đầu
      </button>
    </div>
  );
};

export default ScoringScreen;