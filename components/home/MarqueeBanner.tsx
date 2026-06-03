export default function MarqueeBanner() {
  const items = [
    "Personal Training", "Weight Training", "Muscle Building", "Fat Loss",
    "Strength & Conditioning", "Body Transformation", "Expert Coaches",
    "4.7★ Rated", "Ballabgarh Faridabad", "Open Till 10 PM",
    "First Session FREE", "Beginner Friendly",
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
