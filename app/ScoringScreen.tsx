import React from "react";

const ScoringScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-8">
        Tiêu chí chấm điểm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-8">
        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-8xl mb-3">🤔</div>
          <h3 className="font-semibold text-lg text-purple-800 dark:text-purple-200">Hợp lý</h3>
          <p className="font-bold text-2xl text-purple-600 dark:text-purple-400">5đ</p>
        </div>
        <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-8xl mb-3">😂</div>
          <h3 className="font-semibold text-lg text-pink-800 dark:text-pink-200">Hài hước</h3>
          <p className="font-bold text-2xl text-pink-600 dark:text-pink-400">5đ</p>
        </div>
        <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-8xl mb-3">⚡️</div>
          <h3 className="font-semibold text-lg text-sky-800 dark:text-sky-200">Tốc độ</h3>
          <p className="font-bold text-2xl text-sky-600 dark:text-sky-400">5đ</p>
        </div>
      </div>
    </div>
  );
};

export default ScoringScreen;