import { CheckCircle } from "lucide-react";

function UploadSuccess({ file }) {
  if (!file) return null;

  return (
    <div className="mt-8 bg-green-50 border border-green-300 rounded-2xl p-6">

      <div className="flex items-center gap-4">

        <CheckCircle
          className="text-green-600"
          size={42}
        />

        <div>

          <h2 className="text-2xl font-bold text-green-700">
            Upload Successful
          </h2>

          <p className="text-slate-600 mt-1">
            {file.name}
          </p>

          <p className="text-green-600 mt-2">
            Ready for Accessibility Scan
          </p>

        </div>

      </div>

    </div>
  );
}

export default UploadSuccess;