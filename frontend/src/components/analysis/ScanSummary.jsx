import {
  FileText,
  Image,
  ShieldCheck,
  AlertTriangle,
  Timer,
  BookOpen,
} from "lucide-react";

function SummaryItem({ icon, title, value, color }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        border
        border-slate-200
        p-5
        flex
        items-center
        gap-4
        hover:shadow-lg
        transition
      "
    >
      <div
        className={`
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          ${color}
        `}
      >
        {icon}
      </div>

      <div>
        <p className="text-slate-500 text-sm">
          {title}
        </p>

        <h3 className="text-2xl font-bold text-slate-800">
          {value}
        </h3>
      </div>
    </div>
  );
}

function ScanSummary({ pdf, accessibility }) {
  return (
    <div className="mt-10">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Accessibility Scan Summary
          </h2>

          <p className="text-slate-500 mt-2">
            Overview of the scanned document and accessibility analysis.
          </p>
        </div>

        <span
          className="
            px-4
            py-2
            rounded-full
            bg-green-100
            text-green-700
            font-semibold
          "
        >
          WCAG Analysis
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <SummaryItem
          icon={<FileText className="text-blue-600" />}
          title="Pages"
          value={pdf.pages}
          color="bg-blue-100"
        />

        <SummaryItem
          icon={<Image className="text-purple-600" />}
          title="Images"
          value={pdf.total_images}
          color="bg-purple-100"
        />

        <SummaryItem
          icon={<BookOpen className="text-indigo-600" />}
          title="Headings"
          value={pdf.total_headings}
          color="bg-indigo-100"
        />

        <SummaryItem
          icon={<AlertTriangle className="text-red-600" />}
          title="Issues Found"
          value={accessibility.total_issues}
          color="bg-red-100"
        />

        <SummaryItem
          icon={<ShieldCheck className="text-green-600" />}
          title="Accessibility Score"
          value={`${accessibility.score}/100`}
          color="bg-green-100"
        />

        <SummaryItem
          icon={<Timer className="text-orange-600" />}
          title="Scan Time"
          value="< 1 sec"
          color="bg-orange-100"
        />

      </div>

    </div>
  );
}

export default ScanSummary;