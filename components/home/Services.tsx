import Link from "next/link";
import { FaFire, FaRunning, FaDumbbell, FaMusic, FaUserTie, FaChild, FaLeaf, FaHeart, FaBicycle, FaAppleAlt, FaArrowRight } from "react-icons/fa";
import { GiBoxingGlove } from "react-icons/gi";

const services = [
  { icon: FaFire, name: "HIIT Classes", desc: "High-intensity intervals that torch calories and build endurance fast.", color: "from-orange-500/20 to-red-500/10", border: "border-orange-500/30", iconColor: "text-orange-400", img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400&q=80" },
  { icon: FaRunning, name: "Aerobics", desc: "Fun, energetic group sessions to boost cardio and lift your mood.", color: "from-pink-500/20 to-rose-500/10", border: "border-pink-500/30", iconColor: "text-pink-400", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80" },
  { icon: GiBoxingGlove, name: "CrossFit", desc: "Functional movements at high intensity for total-body strength.", color: "from-red-500/20 to-orange-500/10", border: "border-red-500/30", iconColor: "text-red-400", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80" },
  { icon: FaMusic, name: "Zumba", desc: "Dance your way to fitness with Latin-inspired choreography.", color: "from-purple-500/20 to-pink-500/10", border: "border-purple-500/30", iconColor: "text-purple-400", img: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=400&q=80" },
  { icon: FaUserTie, name: "Personal Training", desc: "1-on-1 coaching tailored to your goals, body type, and schedule.", color: "from-blue-500/20 to-cyan-500/10", border: "border-blue-500/30", iconColor: "text-blue-400", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
  { icon: FaChild, name: "Youth Sports & Classes", desc: "Sports, fitness & fun programs designed for kids and teens.", color: "from-yellow-500/20 to-orange-500/10", border: "border-yellow-500/30", iconColor: "text-yellow-400", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80" },
  { icon: FaLeaf, name: "Yoga Classes", desc: "Find balance, flexibility, and mental clarity through mindful yoga.", color: "from-green-500/20 to-teal-500/10", border: "border-green-500/30", iconColor: "text-green-400", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80" },
  { icon: FaDumbbell, name: "Weight Training", desc: "Build muscle, burn fat, and boost metabolism with iron training.", color: "from-zinc-500/20 to-zinc-400/10", border: "border-zinc-500/30", iconColor: "text-zinc-300", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
  { icon: FaHeart, name: "Pilates Classes", desc: "Core-focused exercises for posture, strength, and flexibility.", color: "from-rose-500/20 to-pink-500/10", border: "border-rose-500/30", iconColor: "text-rose-400", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80" },
  { icon: FaAppleAlt, name: "Nutrition Consulting", desc: "Expert diet plans and nutrition guidance to fuel your fitness.", color: "from-lime-500/20 to-green-500/10", border: "border-lime-500/30", iconColor: "text-lime-400", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" },
  { icon: FaBicycle, name: "Cycling", desc: "Stationary cycling classes for cardio endurance and leg strength.", color: "from-cyan-500/20 to-blue-500/10", border: "border-cyan-500/30", iconColor: "text-cyan-400", img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80" },
  { icon: FaRunning, name: "Dance Fitness Classes", desc: "High-energy dance workouts that make exercise feel like a party.", color: "from-fuchsia-500/20 to-purple-500/10", border: "border-fuchsia-500/30", iconColor: "text-fuchsia-400", img: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=400&q=80" },
];

export default function Services() {
  return (
    <section className="py-20 bg-zinc-950 bg-grid" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            14+ FITNESS <span className="gradient-text">PROGRAMS</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From high-intensity training to mindful yoga, we have a class for every fitness goal,
            age, and fitness level. Online classes available too!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.name}
              className={`service-card bg-gradient-to-br ${s.color} border ${s.border} rounded-2xl overflow-hidden group cursor-pointer`}
            >
              {/* Image */}
              <div className="h-40 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <div className={`absolute top-3 right-3 w-8 h-8 bg-zinc-950/70 rounded-lg flex items-center justify-center`}>
                  <s.icon className={`${s.iconColor} text-sm`} />
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="font-oswald text-white text-lg tracking-wide mb-1">{s.name}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Book Your Free Session <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
