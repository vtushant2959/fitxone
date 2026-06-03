import { FaInstagram, FaLinkedin } from "react-icons/fa";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Head Trainer & HIIT Specialist",
    exp: "8 Years Experience",
    certs: "NSCA-CPT, CrossFit L2",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    specialties: ["HIIT", "CrossFit", "Weight Training"],
  },
  {
    name: "Priya Kapoor",
    role: "Yoga & Pilates Coach",
    exp: "6 Years Experience",
    certs: "RYT-500, PMA-CPT",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    specialties: ["Yoga", "Pilates", "Meditation"],
  },
  {
    name: "Neha Gupta",
    role: "Zumba & Dance Fitness",
    exp: "5 Years Experience",
    certs: "Zumba Licensed, ACE-GFI",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    specialties: ["Zumba", "Aerobics", "Dance Fitness"],
  },
  {
    name: "Amit Verma",
    role: "Strength & Conditioning Coach",
    exp: "7 Years Experience",
    certs: "CSCS, CrossFit L3",
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80",
    specialties: ["CrossFit", "Strength", "Youth Sports"],
  },
];

export default function Trainers() {
  return (
    <section className="py-20 bg-zinc-900" id="trainers">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Our Team</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            EXPERT <span className="gradient-text">TRAINERS</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            Certified, experienced coaches who live and breathe fitness — and are obsessed with your results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden group hover:border-orange-500/40 transition-all hover:-translate-y-2">
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                {/* Social */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-8 h-8 bg-zinc-900/80 rounded-lg flex items-center justify-center text-pink-400 hover:text-white transition-colors">
                    <FaInstagram size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-zinc-900/80 rounded-lg flex items-center justify-center text-blue-400 hover:text-white transition-colors">
                    <FaLinkedin size={14} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-oswald text-lg text-white tracking-wide">{t.name}</h3>
                <p className="text-orange-400 text-xs mb-1">{t.role}</p>
                <p className="text-zinc-500 text-xs mb-3">{t.exp} · {t.certs}</p>
                <div className="flex flex-wrap gap-1">
                  {t.specialties.map((s) => (
                    <span key={s} className="text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
