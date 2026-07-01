import { AlertTriangle } from "lucide-react";

const filters = [
  "All",
  "High",
  "Medium",
  "Low",
];

function SeverityFilter({
  selected,
  onChange,
}) {
  return (
    <div className="mt-10">

      <div className="flex items-center gap-3 mb-5">

        <AlertTriangle className="text-red-600" />

        <h2 className="text-2xl font-bold text-slate-800">
          Filter Accessibility Issues
        </h2>

      </div>

      <div className="flex flex-wrap gap-4">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300

              ${
                selected === filter
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white border border-slate-300 hover:bg-slate-100"
              }
            `}
          >
            {filter}
          </button>
        ))}

      </div>

    </div>
  );
}

export default SeverityFilter;