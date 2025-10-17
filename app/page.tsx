import HeightPrediction from "./components/HeightPrediction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 bg-radial from-white from-40% to-pink-200">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-12">
          Dự đoán chiều cao
        </h1>
        <HeightPrediction />
      </div>
    </main>
  );
}
