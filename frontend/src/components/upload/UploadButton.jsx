function UploadButton({
  file,
  uploading,
  onUpload,
}) {
  return (
    <button
      onClick={onUpload}
      disabled={!file || uploading}
      className="
      mt-8
      w-full
      rounded-xl
      bg-blue-600
      hover:bg-blue-700
      disabled:bg-slate-400
      text-white
      py-4
      font-semibold
      transition
      "
    >
      {uploading ? "Uploading..." : "Upload Document"}
    </button>
  );
}

export default UploadButton;