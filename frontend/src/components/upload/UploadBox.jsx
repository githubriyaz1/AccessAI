import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  UploadCloud,
  FileText,
  Trash2,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

function UploadBox({
  file,
  onFileSelect,
  onRemove,
}) {
  const inputRef = useRef(null);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    onFileSelect(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];

    handleFile(droppedFile);
  };

  const fileSize = file
    ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
    : "";

  return (
    <AnimatePresence mode="wait">
      {!file ? (
        <motion.div
          key="dropzone"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className="
            border-2
            border-dashed
            border-blue-300
            rounded-3xl
            bg-linear-to-br
            from-blue-50
            to-white
            p-14
            text-center
            cursor-pointer
            hover:border-blue-500
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="flex justify-center"
          >
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
              "
            >
              <UploadCloud
                size={50}
                className="text-blue-600"
              />
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold mt-8">
            Drag & Drop your PDF
          </h2>

          <p className="text-slate-500 mt-3 text-lg">
            or click anywhere to browse files
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
              PDF Only
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              Max 20 MB
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
              Instant Analysis
            </span>

          </div>

          <input
            ref={inputRef}
            hidden
            type="file"
            accept=".pdf"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </motion.div>
      ) : (
        <motion.div
          key="selected"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            rounded-3xl
            border
            border-green-200
            bg-green-50
            p-8
            shadow-lg
          "
        >
          <div className="flex items-center gap-5">

            <div
              className="
                w-20
                h-20
                rounded-2xl
                bg-red-100
                flex
                items-center
                justify-center
              "
            >
              <FileText
                size={42}
                className="text-red-600"
              />
            </div>

            <div className="flex-1">

              <h2 className="text-2xl font-bold break-all">
                {file.name}
              </h2>

              <div className="flex items-center gap-2 mt-2 text-green-700">

                <CheckCircle2 size={18} />

                <span className="font-medium">
                  Ready to Upload
                </span>

              </div>

              <p className="text-slate-500 mt-2">
                {fileSize} • PDF Document
              </p>

            </div>

          </div>

          <div className="flex gap-4 mt-8">

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="
                flex-1
                py-3
                rounded-xl
                bg-blue-600
                text-white
                hover:bg-blue-700
                flex
                items-center
                justify-center
                gap-2
                transition
              "
            >
              <RefreshCcw size={18} />
              Change File
            </button>

            <button
              type="button"
              onClick={onRemove}
              className="
                flex-1
                py-3
                rounded-xl
                bg-red-600
                text-white
                hover:bg-red-700
                flex
                items-center
                justify-center
                gap-2
                transition
              "
            >
              <Trash2 size={18} />
              Remove
            </button>

          </div>

          <input
            ref={inputRef}
            hidden
            type="file"
            accept=".pdf"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default UploadBox;