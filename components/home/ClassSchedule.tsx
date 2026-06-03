export default function ClassSchedule() {
  const schedule = [
    { day: "Monday – Friday", classes: [
      { time: "5:00 – 6:30 AM", name: "Morning Yoga", trainer: "Priya" },
      { time: "6:30 – 7:30 AM", name: "HIIT Blast", trainer: "Rahul" },
      { time: "8:00 – 9:00 AM", name: "Aerobics", trainer: "Neha" },
      { time: "5:00 – 6:00 PM", name: "CrossFit WOD", trainer: "Amit" },
      { time: "6:30 – 7:30 PM", name: "Zumba", trainer: "Neha" },
      { time: "8:00 – 9:00 PM", name: "Weight Training", trainer: "Rahul" },
    ]},
    { day: "Saturday", classes: [
      { time: "6:00 – 7:00 AM", name: "Yoga Flow", trainer: "Priya" },
      { time: "7:30 – 9:00 AM", name: "Boot Camp HIIT", trainer: "Rahul" },
      { time: "10:00 – 11:00 AM", name: "Pilates", trainer: "Anjali" },
      { time: "5:00 – 6:00 PM", name: "Dance Fitness", trainer: "Neha" },
      { time: "7:00 – 8:00 PM", name: "CrossFit", trainer: "Amit" },
    ]},
    { day: "Sunday", classes: [
      { time: "7:00 – 8:00 AM", name: "Sunday Yoga", trainer: "Priya" },
      { time: "9:00 – 10:00 AM", name: "Cycling Class", trainer: "Vikram" },
      { time: "10:30 – 11:30 AM", name: "Youth Sports", trainer: "Amit" },
      { time: "6:00 – 7:00 PM", name: "Zumba Party", trainer: "Neha" },
    ]},
  ];

  const colors: Record<string, string> = {
    "Morning Yoga": "bg-green-500/20 text-green-400 border-green-500/30",
    "HIIT Blast": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Aerobics": "bg-pink-500/20 text-pink-400 border-pink-500/30",
    "CrossFit WOD": "bg-red-500/20 text-red-400 border-red-500/30",
    "Zumba": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Weight Training": "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
    "Yoga Flow": "bg-green-500/20 text-green-400 border-green-500/30",
    "Boot Camp HIIT": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Pilates": "bg-rose-500/20 text-rose-400 border-rose-500/30",
    "Dance Fitness": "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
    "CrossFit": "bg-red-500/20 text-red-400 border-red-500/30",
    "Sunday Yoga": "bg-green-500/20 text-green-400 border-green-500/30",
    "Cycling Class": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    "Youth Sports": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Zumba Party": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };

  return (
    <section className="py-20 bg-zinc-950 bg-grid" id="schedule">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Class Schedule</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            WEEKLY <span className="gradient-text">TIMETABLE</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-zinc-400 max-w-xl mx-auto">Find the perfect class for your schedule. Book your spot and show up ready to sweat!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {schedule.map((day) => (
            <div key={day.day} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-oswald text-lg text-orange-400 uppercase tracking-wide mb-4 pb-3 border-b border-zinc-800">
                {day.day}
              </h3>
              <div className="space-y-3">
                {day.classes.map((cls) => (
                  <div key={cls.name} className={`flex items-center justify-between p-3 rounded-xl border ${colors[cls.name] || "bg-zinc-800 text-zinc-300 border-zinc-700"}`}>
                    <div>
                      <p className="font-semibold text-sm">{cls.name}</p>
                      <p className="text-xs opacity-70">with {cls.trainer}</p>
                    </div>
                    <p className="text-xs opacity-80 text-right">{cls.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          * Schedule may vary on holidays. Call us at <a href="tel:+917217829394" className="text-orange-400 hover:underline">072178 29394</a> to confirm.
        </p>
      </div>
    </section>
  );
}
