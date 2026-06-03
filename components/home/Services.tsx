import Link from "next/link";
import { FaUserTie, FaDumbbell, FaArrowRight, FaFire, FaChartLine, FaHeartbeat, FaRunning, FaMedal } from "react-icons/fa";

const personalTrainingFeatures = [
  { icon: FaFire, title: "1-on-1 Custom Coaching", desc: "Your trainer designs a program specifically for your body type, fitness level, and goals." },
  { icon: FaChartLine, title: "Progress Tracking", desc: "Weekly check-ins, body measurements, and performance benchmarks to keep you on track." },
  { icon: FaHeartbeat, title: "Nutrition Guidance", desc: "Practical diet advice aligned with your training to accelerate fat loss or muscle gain." },
  { icon: FaMedal, title: "Injury Prevention", desc: "Correct form, warm-ups, and mobility work to keep you training safely and consistently." },
];

const weightTrainingFeatures = [
  { icon: FaDumbbell, title: "Full Equipment Access", desc: "Barbells, dumbbells, cable machines, and specialty equipment for every muscle group." },
  { icon: FaRunning, title: "Structured Programs", desc: "Push/Pull/Legs, PPL, full-body, and powerlifting splits guided by expert trainers." },
  { icon: FaChartLine, title: "Progressive Overload", desc: "Systematic increase in training volume to ensure continuous strength and muscle gains." },
  { icon: FaFire, title: "Body Composition", desc: "Targeted training protocols for building lean muscle while reducing body fat percentage." },
];

export default function Services() {
  return (
    <section className="py-20 bg-zinc-950 bg-grid" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            OUR EXPERT <span className="gradient-text">PROGRAMS</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Two powerful, focused programs delivered by certified trainers — everything you need
            to transform your body and reach your fitness peak.
          </p>
        </div>

        {/* Personal Training */}
        <div className="mb-10 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Personal Training at Indian Fitness Zone"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/60" />
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <FaUserTie size={10} /> Personal Training
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="font-bebas text-4xl text-white tracking-wide mb-2">PERSONAL <span className="gradient-text">TRAINING</span></h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Our certified personal trainers work with you one-on-one to build a program tailored
                entirely to your goals — whether that&apos;s losing weight, building muscle, improving
                athletic performance, or simply getting healthier. No cookie-cutter routines, just
                results that last.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {personalTrainingFeatures.map((f) => (
                  <div key={f.title} className="flex gap-3 items-start">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon className="text-orange-400 text-sm" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{f.title}</p>
                      <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-3 rounded-xl transition-all w-fit">
                Book Personal Training <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Weight Training */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="font-bebas text-4xl text-white tracking-wide mb-2">WEIGHT <span className="gradient-text">TRAINING</span></h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Our state-of-the-art weight training floor has everything you need to build serious
                strength and muscle. From beginners picking up their first barbell to experienced
                lifters chasing new PRs — our trainers guide every session with expert technique and
                smart programming.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {weightTrainingFeatures.map((f) => (
                  <div key={f.title} className="flex gap-3 items-start">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon className="text-orange-400 text-sm" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{f.title}</p>
                      <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-3 rounded-xl transition-all w-fit">
                Start Weight Training <FaArrowRight />
              </Link>
            </div>
            <div className="relative h-72 lg:h-auto overflow-hidden order-1 lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Weight Training at Indian Fitness Zone"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/60" />
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <FaDumbbell size={10} /> Weight Training
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-400 mb-4 text-lg">Not sure which program is right for you?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Get a Free Consultation <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
