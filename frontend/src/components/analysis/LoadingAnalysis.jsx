import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  Image,
  Heading,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

function LoadingAnalysis({ stage }) {
  const steps = [
  {
    icon: Upload,
    title: "Uploading Document...",
  },
  {
    icon: FileText,
    title: "Extracting Metadata...",
  },
  {
    icon: Image,
    title: "Scanning Images...",
  },
  {
    icon: Heading,
    title: "Detecting Headings...",
  },
  {
    icon: ShieldCheck,
    title: "Checking Document Structure...",
  },
  {
    icon: ShieldCheck,
    title: "Running Accessibility Rules...",
  },
  {
    icon: BarChart3,
    title: "Generating Accessibility Report...",
  },
];


  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        bg-white
        rounded-3xl
        shadow-xl
        p-8
        mt-10
      "
    >
      <h2 className="text-3xl font-bold text-slate-800 mb-2">
  Accessibility Analysis in Progress
</h2>

<p className="text-slate-500 mb-8">
  Please wait while AccessAI analyzes your document for WCAG compliance.
</p>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;

          

          const active = stage === index;
          const done = stage > index;

          return (
            <div key={index}>

              <div className="flex items-center gap-4 mb-2">

                <Icon
                  size={24}
                  className={
                    done
                      ? "text-green-600"
                      : active
                      ? "text-blue-600"
                      : "text-slate-400"
                  }
                />

                <span
                  className={
                    done
                      ? "font-semibold text-green-600"
                      : active
                      ? "font-semibold text-blue-600"
                      : "text-slate-400"
                  }
                >
                  {step.title}
                </span>

                {done && (
                  <span className="ml-auto text-green-600 font-bold">
                    ✓
                  </span>
                )}

              </div>

              <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

                {(active || done) && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: done ? "100%" : "70%",
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="
                      h-full
                      bg-blue-600
                    "
                  />
                )}

              </div>

            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default LoadingAnalysis;