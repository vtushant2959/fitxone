import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaTrophy, FaUsers, FaHeart, FaStar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about FITXONE GYM — Faridabad's most trusted fitness center in Sector 23 with 4.5★ rating and 160+ happy members.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-zinc-950 bg-grid">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">About FITXONE</p>
            <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide mb-6 leading-tight">
              MORE THAN A GYM — <span className="gradient-text">A COMMUNITY</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              FITXONE GYM was founded with one mission: to make world-class fitness accessible to every resident
              of Faridabad. Located in the heart of Sector 23, Sanjay Colony, we&apos;ve built a gym that
              welcomes beginners, athletes, women, seniors, and youth alike.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Our 4.5-star Google rating and 160+ glowing reviews are a testament to our commitment to
              results, safety, and community. With certified trainers, top equipment, AC facility,
              and 14+ fitness programs — we have everything you need to reach your goals.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: FaUsers, val: "500+", label: "Active Members" },
                { icon: FaTrophy, val: "5+", label: "Certified Trainers" },
                { icon: FaHeart, val: "14+", label: "Programs Offered" },
                { icon: FaStar, val: "4.5★", label: "Google Rating" },
              ].map((s) => (
                <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-3 items-center">
                  <s.icon className="text-orange-400 text-xl shrink-0" />
                  <div>
                    <p className="font-bebas text-2xl text-white">{s.val}</p>
                    <p className="text-zinc-400 text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
              Start Your Journey <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
              "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&q=80",
              "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="FITXONE GYM" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-5xl text-white tracking-wide mb-4">OUR <span className="gradient-text">VALUES</span></h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Results-Driven", icon: "🎯", desc: "Every program, every session, every rep is designed to get you visible, lasting results." },
              { title: "Inclusive Community", icon: "🤝", desc: "Beginners to athletes, all ages and fitness levels — everyone belongs at FITXONE." },
              { title: "Expert Guidance", icon: "🏆", desc: "Nationally certified trainers who customize every workout to your unique body and goals." },
              { title: "Safety First", icon: "🛡️", desc: "Proper form, spotting, and injury prevention are non-negotiable in every session." },
              { title: "Clean & Modern", icon: "✨", desc: "Top-of-the-line equipment, AC facility, and spotless hygiene for your comfort." },
              { title: "Accountability", icon: "💪", desc: "We track your progress, celebrate your wins, and push you when you need it most." },
            ].map((v) => (
              <div key={v.title} className="bg-zinc-800/50 border border-zinc-700 hover:border-orange-500/40 rounded-2xl p-6 transition-all hover:-translate-y-1">
                <p className="text-4xl mb-3">{v.icon}</p>
                <h3 className="font-oswald text-xl text-white uppercase tracking-wide mb-2">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-5xl text-white tracking-wide mb-4">READY TO JOIN THE FITXONE FAMILY?</h2>
          <p className="text-orange-100 text-lg mb-8">Your first session is on us. No commitments, just results.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-zinc-100 transition-colors text-lg">
              Get Free Trial
            </Link>
            <a href="tel:+917217829394" className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
              Call: 072178 29394
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
