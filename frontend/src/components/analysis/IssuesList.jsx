function IssuesList({ issues }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Accessibility Issues
      </h2>

      {issues.length === 0 ? (
        <p className="text-green-600">
          ✅ No accessibility issues found.
        </p>
      ) : (
        issues.map((issue) => (
          <div
            key={issue.rule}
            className="border rounded-xl p-5 mb-4"
          >
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">
                {issue.rule}
              </h3>

              <span className="text-red-500 font-semibold">
                {issue.severity}
              </span>
            </div>

            <p className="mt-2">
              {issue.message}
            </p>

            <p className="mt-3 text-blue-600">
              💡 {issue.recommendation}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default IssuesList;