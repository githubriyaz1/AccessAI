import { FileText, FileCode, FileSpreadsheet, X } from "lucide-react";

function FilePreview({ file, onRemove }) {
  if (!file) return null;

  const getIcon = () => {
    if (file.type.includes("pdf"))
      return <FileText size={34} className="text-red-500" />;

    if (
      file.type.includes("html") ||
      file.name.endsWith(".html")
    )
      return <FileCode size={34} className="text-orange-500" />;

    if (
      file.type.includes("word") ||
      file.name.endsWith(".docx")
    )
      return (
        <FileSpreadsheet
          size={34}
          className="text-blue-500"
        />
      );

    return <FileText size={34} />;
  };

  const fileSize = (file.size / 1024 / 1024).toFixed(2);

  return (
    <div
      className="
      mt-8
      bg-white
      rounded-2xl
      shadow-md
      p-5
      flex
      items-center
      justify-between
      "
    >
      <div className="flex items-center gap-4">

        {getIcon()}

        <div>

          <h3 className="font-semibold text-lg">
            {file.name}
          </h3>

          <p className="text-slate-500">
            {fileSize} MB
          </p>

        </div>

      </div>

      <button
        onClick={onRemove}
        className="
        p-2
        rounded-lg
        hover:bg-red-100
        text-red-500
        transition
        "
      >
        <X />
      </button>

    </div>
  );
}

export default FilePreview;