function StatsCards({ pdf, accessibility }) {
  const cards = [
    {
      title: "Pages",
      value: pdf.pages,
    },
    {
      title: "Images",
      value: pdf.total_images,
    },
    {
      title: "Headings",
      value: pdf.total_headings,
    },
    {
      title: "Issues",
      value: accessibility.total_issues,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow p-6"
        >
          <p className="text-slate-500">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;