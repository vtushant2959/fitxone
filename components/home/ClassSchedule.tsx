export default function ClassSchedule() {
  const schedule = [
    {
      day: "Monday – Friday",
      classes: [
        { time: "5:00 – 6:30 AM", name: "Early Morning Weights", trainer: "Coach Ravi" },
        { time: "6:30 – 7:30 AM", name: "Personal Training Slots", trainer: "Coach Arjun" },
        { time: "8:00 – 9:00 AM", name: "Strength & Conditioning", trainer: "Coach Ravi" },
        { time: "5:00 – 7:00 PM", name: "Evening Weight Training", trainer: "Open Floor" },
        { time: "7:00 – 8:30 PM", name: "Personal Training Slots", trainer: "Coach Arjun" },
        { time: "9:00 – 10:00 PM", name: "Late Night Lift", trainer: "Coach Ravi" },
      ],
    },
    {
      day: "Saturday",
      classes: [
        { time: "5:30 – 7:00 AM", name: "Morning Power Session", trainer: "Coach Arjun" },
        { time: "7:30 – 9:00 AM", name: "Personal Training Slots", trainer: "Coach Ravi" },
        { time: "10:00 – 11:30 AM", name: "Strength Training", trainer: "Open Floor" },
        { time: "5:00 – 7:00 PM", name: "Evening Training Block", trainer: "Coach Arjun" },
        { time: "7:30 – 9:00 PM", name: "Personal Training Slots", trainer: "Coach Ravi" },
      ],
    },
    {
      day: "Sunday",
      classes: [
        { time: "6:00 – 8:00 AM", name: "Sunday Strength Session", trainer: "Coach Arjun" },
        { time: "9:00 – 10:30 AM", name: "Personal Training Slots", trainer: "Coach Ravi" },
        { time: "5:00 – 7:00 PM", name: "Evening Weight Training", trainer: "Open Floor" },
        { time: "7:30 – 9:00 PM", name: "Personal Training Slots", trainer: "Coach Arjun" },
      ],
    },
  ];

  const colors: Record<string, string> = {
    "Early Morning Weights": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Personal Training Slots": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Strength & Conditioning": "bg-red-500/20 text-red-400 border-red-500/30",
    "Evening Weight Training": "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
    "Late Night Lift": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Morning Power Session": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Strength Training": "bg-red-500/20 text-red-400 border-red-500/30",
    "Evening Training Block": "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
    "Sunday Strength Session": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  return (
    <section className="py-20 bg-zinc-950 bg-grid" id="schedule">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Daily Schedule</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            WEEKLY <span className="gradient-text">TIMETABLE</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            Training slots available all day, 7 days a week. Personal training sessions can be booked in advance — call to reserve your spot!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {schedule.map((day) => (
            <div key={day.day} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-oswald text-lg text-orange-400 uppercase tracking-wide mb-4 pb-3 border-b border-zinc-800">
                {day.day}
              </h3>
              <div className="space-y-3">
                {day.classes.map((cls) => (
                  <div key={cls.time + cls.name} className={`flex items-center justify-between p-3 rounded-xl border ${colors[cls.name] || "bg-zinc-800 text-zinc-300 border-zinc-700"}`}>
                    <div>
                      <p className="font-semibold text-sm">{cls.name}</p>
                      <p className="text-xs opacity-70">with {cls.trainer}</p>
                    </div>
                    <p className="text-xs opacity-80 text-right shrink-0 ml-2">{cls.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          * Personal training slots are limited — book in advance. Call <a href="tel:+917859995004" className="text-orange-400 hover:underline">078599 95004</a> to reserve.
        </p>
      </div>
    </section>
  );
}
