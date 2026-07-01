import { useState } from "react";
import { motion } from "framer-motion";

import api from "../../services/api";

import UploadBox from "../../components/upload/UploadBox";
import UploadButton from "../../components/upload/UploadButton";

import AnalysisScore from "../../components/analysis/AnalysisScore";
import AnalysisStats from "../../components/analysis/AnalysisStats";
import DocumentInfo from "../../components/analysis/DocumentInfo";
import AccessibilitySummary from "../../components/analysis/AccessibilitySummary";
import IssueCard from "../../components/analysis/IssueCard";

import LoadingAnalysis from "../../components/analysis/LoadingAnalysis";
import ScanSummary from "../../components/analysis/ScanSummary";

import SeverityFilter from "../../components/analysis/SeverityFilter";
import SearchIssues from "../../components/analysis/SearchIssues";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [analysisStage, setAnalysisStage] = useState(0);
  const [severityFilter, setSeverityFilter] = useState("All");

  const handleRemove = () => {
    setSelectedFile(null);
    setAnalysis(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setAnalysisStage(0);

    const timer = setInterval(() => {
      setAnalysisStage((prev) => {
        if (prev >= 6) {
          clearInterval(timer);
          return 6;
        }
        return prev + 1;
      });
    }, 600);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setAnalysis(response.data);
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    } finally {
      clearInterval(timer);
      setUploading(false);
    }
  };

  const filteredIssues = (analysis?.accessibility?.issues || []).filter((issue) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSeverity =
      severityFilter === "All" ||
      issue.severity?.toLowerCase() === severityFilter.toLowerCase();

    const matchesSearch =
      issue.rule?.toLowerCase().includes(search) ||
      issue.message?.toLowerCase().includes(search) ||
      issue.recommendation?.toLowerCase().includes(search) ||
      issue.severity?.toLowerCase().includes(search);

    return matchesSeverity && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: "1700px" }}
      className="w-full mx-auto px-6 lg:px-10 pb-20"
    >
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-slate-800">
          Accessibility Analysis Dashboard
        </h1>
        <p className="text-slate-500 mt-3 text-lg">
          Upload a PDF document and receive an instant accessibility analysis powered by AccessAI.
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8">
        <UploadBox
          file={selectedFile}
          onFileSelect={setSelectedFile}
          onRemove={handleRemove}
        />
        <UploadButton
          file={selectedFile}
          uploading={uploading}
          onUpload={handleUpload}
        />
      </div>

      {/* Loading Animation State */}
      {uploading && <LoadingAnalysis stage={analysisStage} />}

      {/* Empty State */}
      {!analysis && !uploading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg p-12 text-center"
        >
          <div className="text-7xl mb-6">📄</div>
          <h2 className="text-3xl font-bold text-slate-800">Ready for Analysis</h2>
          <p className="mt-4 text-slate-500 text-lg">
            Upload your PDF to receive an accessibility score, metadata extraction, issue detection,
            recommendations and compliance analysis.
          </p>
        </motion.div>
      )}

      {/* Analysis Output */}
      {analysis && !uploading && (
        <div className="space-y-10 mt-12">
          <ScanSummary
            pdf={analysis.pdf}
            accessibility={analysis.accessibility}
          />

          <AnalysisScore score={analysis.accessibility.score} />

          <AnalysisStats
            pdf={analysis.pdf}
            accessibility={analysis.accessibility}
          />

          <DocumentInfo pdf={analysis.pdf} />

          <AccessibilitySummary
            pdf={analysis.pdf}
            accessibility={analysis.accessibility}
          />

          <div>
            <SeverityFilter selected={severityFilter} onChange={setSeverityFilter} />
            <SearchIssues value={searchTerm} onChange={setSearchTerm} />

            <h2 className="text-3xl font-bold text-slate-800 mt-8 mb-6">
              Accessibility Issues
            </h2>

            {filteredIssues.length === 0 ? (
              <div className="bg-green-50 border border-green-300 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-green-700">🎉 Excellent!</h3>
                <p className="mt-3 text-green-600">
                  No accessibility issues found matching your criteria.
                </p>
              </div>
            ) : (
              filteredIssues.map((issue, index) => (
                <IssueCard key={index} issue={issue} />
              ))
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Upload;