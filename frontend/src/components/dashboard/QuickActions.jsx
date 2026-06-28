function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

<button className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white p-6 transition hover:scale-105">
<div className="text-3xl mb-2">📄</div>
Upload PDF
</button>

<button className="bg-green-600 hover:bg-green-700 rounded-xl text-white p-6 transition hover:scale-105">
<div className="text-3xl mb-2">♿</div>
Scan Accessibility
</button>

<button className="bg-purple-600 hover:bg-purple-700 rounded-xl text-white p-6 transition hover:scale-105">
<div className="text-3xl mb-2">📊</div>
Generate Report
</button>

<button className="bg-orange-600 hover:bg-orange-700 rounded-xl text-white p-6 transition hover:scale-105">
<div className="text-3xl mb-2">🤖</div>
Ask AI
</button>

</div>
  );
}

export default QuickActions;