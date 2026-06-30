function ScoreCard({ score }) {
  const color =
    score >= 90
      ? "text-green-600"
      : score >= 70
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="bg-white rounded-2xl shadow p-8 mt-10">
      <p className="text-slate-500 text-lg">
        Accessibility Score
      </p>

      <h1 className={`text-6xl font-bold mt-2 ${color}`}>
        {score}
      </h1>

      <p className="text-slate-400 mt-2">
        out of 100
      </p>
    </div>
  );
}

export default ScoreCard;