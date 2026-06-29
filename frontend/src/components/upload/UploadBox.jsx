import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function UploadBox({ onFileSelect }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
        ".docx",
      ],
      "text/html": [".html"],
    },
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
        isDragActive
          ? "border-blue-600 bg-blue-50"
          : "border-slate-300 hover:border-blue-500 hover:bg-slate-50"
      }`}
    >
      <input {...getInputProps()} />

      <h2 className="text-2xl font-bold text-slate-700">
        Upload Documents
      </h2>

      <p className="mt-4 text-slate-500">
        Drag & Drop PDF, DOCX or HTML
      </p>

      <p className="my-6 text-slate-400">
        OR
      </p>

      <button
        type="button"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Browse Files
      </button>
    </div>
  );
}

export default UploadBox;