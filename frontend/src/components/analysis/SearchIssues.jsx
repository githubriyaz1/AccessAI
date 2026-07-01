import { Search } from "lucide-react";

function SearchIssues({
  value,
  onChange,
}) {
  return (
    <div className="mt-8">

      <div className="relative">

        <Search
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          placeholder="Search accessibility issues..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            pl-12
            pr-4
            py-3
            rounded-xl
            border
            border-slate-300
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
          "
        />

      </div>

    </div>
  );
}

export default SearchIssues;