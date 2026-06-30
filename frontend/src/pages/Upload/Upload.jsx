import { useState } from "react";
import { motion } from "framer-motion";

import api from "../../services/api";

import UploadBox from "../../components/upload/UploadBox";
import FilePreview from "../../components/upload/FilePreview";
import UploadProgress from "../../components/upload/UploadProgress";
import UploadButton from "../../components/upload/UploadButton";
import UploadSuccess from "../../components/upload/UploadSuccess";

import AnalysisScore from "../../components/analysis/AnalysisScore";
import AnalysisStats from "../../components/analysis/AnalysisStats";
import DocumentInfo from "../../components/analysis/DocumentInfo";
import AccessibilitySummary from "../../components/analysis/AccessibilitySummary";
import IssueCard from "../../components/analysis/IssueCard";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleRemove = () => {
    setSelectedFile(null);
    setProgress(0);
    setUploaded(false);
    setAnalysis(null);
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

      setAnalysis(response.data);
      setUploaded(true);
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }

    setUploading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto pb-20"
    >
      {/* Page Header */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold text-slate-800">
          Accessibility Analysis Dashboard
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          Upload a PDF document to receive an instant accessibility
          analysis report powered by AccessAI.
        </p>
      </div>

      {/* Upload Section */}

      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8">
        <UploadBox
          onFileSelect={setSelectedFile}
        />

        <FilePreview
          file={selectedFile}
          onRemove={handleRemove}
        />

        <UploadProgress
          progress={progress}
        />

        <UploadButton
          file={selectedFile}
          uploading={uploading}
          onUpload={handleUpload}
        />

        {uploaded && (
          <UploadSuccess
            file={selectedFile}
          />
        )}
      </div>

      {/* Empty State */}

      {!analysis && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            mt-10
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            shadow-lg
            p-12
            text-center
          "
        >
          <div className="text-7xl mb-6">
            📄
          </div>

          <h2 className="text-3xl font-bold text-slate-800">
            Ready for Analysis
          </h2>

          <p className="mt-4 text-slate-500 text-lg">
            Upload your PDF document above to receive a complete
            accessibility analysis including score, document
            information, detected issues and recommendations.
          </p>
        </motion.div>
      )}

      {/* Analysis */}

      {analysis && (
        <div className="space-y-8 mt-10">

          <AnalysisScore
            score={analysis.accessibility.score}
          />

          <AnalysisStats
            pdf={analysis.pdf}
            accessibility={analysis.accessibility}
          />

          <DocumentInfo
            pdf={analysis.pdf}
          />

          <AccessibilitySummary
            pdf={analysis.pdf}
            accessibility={analysis.accessibility}
          />

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Accessibility Issues
            </h2>

            {analysis.accessibility.issues.length === 0 ? (
              <div className="bg-green-50 border border-green-300 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-green-700">
                  🎉 Excellent!
                </h3>

                <p className="mt-3 text-green-600">
                  No accessibility issues were detected in this PDF.
                </p>
              </div>
            ) : (
              analysis.accessibility.issues.map((issue, index) => (
                <IssueCard
                  key={index}
                  issue={issue}
                />
              ))
            )}
          </div>

        </div>
      )}
    </motion.div>
  );
}

export default Upload;