import HeightPrediction from "./components/HeightPrediction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 bg-gradient-to-br from-pink-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-black">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-12">
          Dự đoán chiều cao
        </h1>
        <HeightPrediction />
      </div>
    </main>
  );
}
