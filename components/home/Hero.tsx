"use client";
import Link from "next/link";
import { FaPlay, FaStar, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/92 via-black/70 to-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 bg-grid opacity-30" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-1.5 mb-6">
            <FaMapMarkerAlt className="text-orange-400 text-xs" />
            <span className="text-orange-300 text-xs font-semibold uppercase tracking-widest">
              Sohna Rd, Ballabgarh · Faridabad, Haryana
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl leading-none tracking-wide text-white mb-6">
            BUILD YOUR<br />
            <span className="gradient-text">STRONGEST</span><br />
            BODY EVER.
          </h1>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
            Indian Fitness Zone — Ballabgarh&apos;s top-rated gym with a <span className="text-orange-400 font-semibold">4.7★ Google rating</span>.
            Expert personal trainers, world-class weight training, and a results-driven community
            dedicated to your transformation.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex gap-1">
              {[1,2,3,4].map(i => <FaStar key={i} className="text-orange-400 text-lg" />)}
              <FaStar className="text-orange-400 text-lg opacity-70" />
            </div>
            <span className="text-white font-semibold">4.7</span>
            <span className="text-zinc-400 text-sm">(Google Verified Reviews)</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 pulse-orange"
            >
              Get FREE Trial Session
              <FaArrowRight />
            </Link>
            <a
              href="tel:+917859995004"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-orange-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:bg-orange-500/10"
            >
              <FaPlay className="text-orange-500 text-sm" />
              Call: 078599 95004
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { num: "200+", label: "Members" },
              { num: "2", label: "Core Programs" },
              { num: "Expert", label: "Trainers" },
              { num: "10 PM", label: "Closing Time" },
            ].map((b) => (
              <div key={b.label} className="text-center">
                <p className="font-bebas text-3xl text-orange-400">{b.num}</p>
                <p className="text-zinc-400 text-xs uppercase tracking-widest">{b.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — info card */}
        <div className="hidden lg:block">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 float">
            <h3 className="font-oswald text-xl text-white uppercase mb-5 tracking-wide">
              💪 Why Train With Us?
            </h3>
            {[
              { icon: "🏋️", title: "Expert Personal Training", desc: "1-on-1 sessions customised to your body and goals." },
              { icon: "⚡", title: "Professional Weight Training", desc: "Full equipment gym with guided strength programs." },
              { icon: "🎯", title: "Results-Driven Approach", desc: "Every rep, every set planned to get you real results." },
              { icon: "📍", title: "Prime Location", desc: "2nd Floor, Sohna Rd, opp. Hero Agency, Ballabgarh." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 py-3 border-b border-zinc-800 last:border-0">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  <p className="text-zinc-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-5 w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
            >
              Book Your Free Session <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-orange-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
