function RecentActivity() {
  const files = [
    {
      name: "AnnualReport.pdf",
      time: "2 mins ago",
      icon: "📄",
    },
    {
      name: "Invoice.docx",
      time: "10 mins ago",
      icon: "📝",
    },
    {
      name: "CompanyWebsite.html",
      time: "35 mins ago",
      icon: "🌐",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {files.map((file) => (

          <div
            key={file.name}
            className="flex items-center justify-between border-b pb-4"
          >

            <div className="flex items-center gap-4">

              <div className="text-2xl">
                {file.icon}
              </div>

              <div>

                <p className="font-semibold">
                  {file.name}
                </p>

                <p className="text-sm text-slate-500">
                  Accessibility Scan Completed
                </p>

              </div>

            </div>

            <span className="text-sm text-slate-400">
              {file.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivity;