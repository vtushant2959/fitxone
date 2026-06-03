export default function MarqueeBanner() {
  const items = [
    "HIIT Classes", "CrossFit", "Personal Training", "Yoga", "Zumba",
    "Weight Training", "Aerobics", "Pilates", "Nutrition Consulting", "Cycling",
    "Online Classes Available", "Expert Trainers", "4.5★ Rated",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-orange-500 py-3 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-oswald text-white uppercase tracking-widest text-sm px-6 flex items-center gap-6">
            {item}
            <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
