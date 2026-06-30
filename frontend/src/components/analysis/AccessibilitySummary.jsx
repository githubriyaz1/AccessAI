import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileAlt,
  FaImage,
  FaHeading,
} from "react-icons/fa";

function SummaryItem({ icon, text, success = true }) {
  return (
    <div className="flex items-center gap-3 py-3">

      <div
        className={`text-xl ${
          success
            ? "text-green-600"
            : "text-yellow-500"
        }`}
      >
        {icon}
      </div>

      <p className="text-slate-700 font-medium">
        {text}
      </p>

    </div>
  );
}

function AccessibilitySummary({ pdf, accessibility }) {
  const passed =
    accessibility.total_issues === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        mt-10
        bg-white
        rounded-3xl
        shadow-md
        p-8
      "
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        ✅ Accessibility Summary
      </h2>

      <SummaryItem
        icon={<FaFileAlt />}
        text="Document uploaded successfully"
      />

      <SummaryItem
        icon={<FaCheckCircle />}
        text="Metadata extracted successfully"
      />

      <SummaryItem
        icon={<FaHeading />}
        text={`${pdf.total_headings} heading(s) detected`}
      />

      <SummaryItem
        icon={<FaImage />}
        text={`${pdf.total_images} image(s) detected`}
      />

      <SummaryItem
        success={passed}
        icon={
          passed
            ? <FaCheckCircle />
            : <FaExclamationTriangle />
        }
        text={
          passed
            ? "No accessibility issues detected"
            : `${accessibility.total_issues} accessibility issue(s) found`
        }
      />

      <div className="mt-8 border-t pt-6">

        <div className="flex justify-between">

          <span className="font-semibold text-slate-600">
            Overall Compliance
          </span>

          <span
            className={`font-bold text-xl ${
              accessibility.score >= 90
                ? "text-green-600"
                : accessibility.score >= 70
                ? "text-yellow-500"
                : "text-red-600"
            }`}
          >
            {accessibility.score}/100
          </span>

        </div>

      </div>

    </motion.div>
  );
}

export default AccessibilitySummary;