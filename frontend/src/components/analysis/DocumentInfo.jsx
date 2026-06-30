import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaUser,
  FaBook,
  FaFileAlt,
  FaImage,
  FaHeading,
} from "react-icons/fa";

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-b-0">

      <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-semibold text-slate-800 break-all">
          {value || "N/A"}
        </p>

      </div>

    </div>
  );
}

function DocumentInfo({ pdf }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .4 }}
      className="
        mt-10
        bg-white
        rounded-3xl
        shadow-md
        p-8
      "
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        📄 Document Information
      </h2>

      <InfoRow
        icon={<FaFilePdf />}
        label="Filename"
        value={pdf.filename}
      />

      <InfoRow
        icon={<FaBook />}
        label="Title"
        value={pdf.title}
      />

      <InfoRow
        icon={<FaUser />}
        label="Author"
        value={pdf.author}
      />

      <InfoRow
        icon={<FaFileAlt />}
        label="Pages"
        value={pdf.pages}
      />

      <InfoRow
        icon={<FaImage />}
        label="Images"
        value={pdf.total_images}
      />

      <InfoRow
        icon={<FaHeading />}
        label="Headings"
        value={pdf.total_headings}
      />
    </motion.div>
  );
}

export default DocumentInfo;