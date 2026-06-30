import { motion } from "framer-motion";

function IssueCard({ issue }) {
  const styles = {
    High: {
      border: "border-red-500",
      bg: "bg-red-50",
      badge: "bg-red-100 text-red-700",
    },

    Medium: {
      border: "border-yellow-500",
      bg: "bg-yellow-50",
      badge: "bg-yellow-100 text-yellow-700",
    },

    Low: {
      border: "border-green-500",
      bg: "bg-green-50",
      badge: "bg-green-100 text-green-700",
    },
  };

  const current = styles[issue.severity] || styles.Low;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.01,
        y: -3,
      }}
      transition={{ duration: 0.3 }}
      className={`
        mt-6
        rounded-2xl
        shadow-md
        border-l-8
        ${current.border}
        ${current.bg}
        p-6
      `}
    >
      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold text-slate-800">
          {issue.rule}
        </h2>

        <span
          className={`
            px-4
            py-1
            rounded-full
            text-sm
            font-bold
            ${current.badge}
          `}
        >
          {issue.severity.toUpperCase()}
        </span>

      </div>

      <p className="mt-5 text-lg text-slate-700">
        {issue.message}
      </p>

      <div className="mt-5 flex items-start gap-2">

        <span className="text-xl">
          💡
        </span>

        <p className="text-blue-700 font-medium">
          {issue.recommendation}
        </p>

      </div>
    </motion.div>
  );
}

export default IssueCard;