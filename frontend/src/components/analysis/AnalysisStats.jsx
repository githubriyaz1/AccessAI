import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaImage,
  FaHeading,
  FaBug,
} from "react-icons/fa";

const cards = [
  {
    title: "Pages",
    key: "pages",
    icon: <FaFileAlt />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Images",
    key: "total_images",
    icon: <FaImage />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Headings",
    key: "total_headings",
    icon: <FaHeading />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Issues",
    key: "issues",
    icon: <FaBug />,
    gradient: "from-red-500 to-orange-500",
  },
];

function AnalysisStats({ pdf, accessibility }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => {
        const value =
          card.key === "issues"
            ? accessibility.total_issues
            : pdf[card.key];

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              bg-white
              rounded-3xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              overflow-hidden
            "
          >
            {/* Top Gradient Bar */}

            <div
              className={`
                h-2
                bg-linear-to-r
                ${card.gradient}
              `}
            />

            <div className="p-6">

              {/* Icon */}

              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  bg-linear-to-br
                  ${card.gradient}
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  shadow-lg
                `}
              >
                {card.icon}
              </div>

              <p className="text-slate-500 mt-5">
                {card.title}
              </p>

              <h2 className="text-5xl font-bold mt-2 text-slate-800">
                {value}
              </h2>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AnalysisStats;