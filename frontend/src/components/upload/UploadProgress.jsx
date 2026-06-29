function UploadProgress({ progress }) {
  if (progress <= 0) return null;

  return (
    <div className="mt-6">

      <div className="flex justify-between mb-2">

        <span className="font-medium text-slate-700">
          Upload Progress
        </span>

        <span className="font-semibold">
          {progress}%
        </span>

      </div>

      <div className="w-full bg-slate-200 rounded-full h-3">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default UploadProgress;