"use client";
import { FaUsers, FaDumbbell, FaTrophy, FaStar } from "react-icons/fa";

const stats = [
  { icon: FaUsers, value: "200+", label: "Happy Members", color: "text-orange-400" },
  { icon: FaDumbbell, value: "2", label: "Core Programs", color: "text-red-400" },
  { icon: FaTrophy, value: "Expert", label: "Certified Trainers", color: "text-yellow-400" },
  { icon: FaStar, value: "4.7★", label: "Google Rating", color: "text-orange-400" },
];

export default function StatsBar() {
  return (
    <section className="bg-zinc-900 border-y border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-2">
              <s.icon className={`${s.color} text-3xl mb-1`} />
              <p className={`font-bebas text-4xl ${s.color}`}>{s.value}</p>
              <p className="text-zinc-400 text-sm uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
