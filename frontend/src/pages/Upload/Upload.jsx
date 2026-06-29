import { useState } from "react";
import api from "../../services/api";

import UploadBox from "../../components/upload/UploadBox";
import FilePreview from "../../components/upload/FilePreview";
import UploadProgress from "../../components/upload/UploadProgress";
import UploadButton from "../../components/upload/UploadButton";
import UploadSuccess from "../../components/upload/UploadSuccess";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleRemove = () => {
    setSelectedFile(null);
    setProgress(0);
    setUploaded(false);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setProgress(0);
    setUploaded(false);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress: (event) => {
          const percent = Math.round(
            (event.loaded * 100) / event.total
          );

          setProgress(percent);
        },
      });

      console.log(response.data);

      setUploaded(true);
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }

    setUploading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Upload Documents
      </h1>

      <UploadBox onFileSelect={setSelectedFile} />

      <FilePreview
        file={selectedFile}
        onRemove={handleRemove}
      />

      <UploadProgress progress={progress} />

      {uploaded && (
        <UploadSuccess file={selectedFile} />
      )}

      <UploadButton
        file={selectedFile}
        uploading={uploading}
        onUpload={handleUpload}
      />

    </div>
  );
}

export default Upload;