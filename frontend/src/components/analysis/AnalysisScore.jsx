import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

function AnalysisScore({ score }) {
  const radius = 90;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(count, score, {
      duration: 1.5,
    });

    return () => controls.stop();
  }, [count, score]);

  let color = "#16a34a";
  let label = "Excellent Accessibility";
  let description = "WCAG compliance looks very good.";

  if (score < 90) {
    color = "#f59e0b";
    label = "Good Accessibility";
    description = "Minor improvements are recommended.";
  }

  if (score < 70) {
    color = "#ef4444";
    label = "Needs Improvement";
    description = "Several accessibility issues require attention.";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        mt-10
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-xl
        p-10
      "
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left */}

        <div className="flex justify-center flex-1">

          <div className="relative w-64 h-64">

            <svg
              width="256"
              height="256"
              className="-rotate-90"
            >
              <circle
                stroke="#e5e7eb"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx="128"
                cy="128"
              />

              <motion.circle
                stroke={color}
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={circumference}
                animate={{
                  strokeDashoffset,
                }}
                transition={{
                  duration: 1.5,
                }}
                r={normalizedRadius}
                cx="128"
                cy="128"
              />
            </svg>

            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <motion.h1
                className="text-6xl font-bold"
                style={{ color }}
              >
                {rounded}
              </motion.h1>

              <p className="text-slate-500 mt-2">
                out of 100
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1">

          <h2 className="text-3xl font-bold text-slate-800">
            Accessibility Score
          </h2>

          <p
            className="text-2xl font-semibold mt-5"
            style={{ color }}
          >
            {label}
          </p>

          <p className="text-slate-500 mt-4 leading-7">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

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

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-blue-100
                text-blue-700
                font-semibold
              "
            >
              PDF Checked
            </span>

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-purple-100
                text-purple-700
                font-semibold
              "
            >
              AI Ready
            </span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default AnalysisScore;