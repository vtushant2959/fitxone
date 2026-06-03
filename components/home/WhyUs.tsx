import { FaCheckCircle, FaWifi, FaSnowflake, FaParking, FaShower, FaUserShield, FaClock } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";

const features = [
  { icon: FaCheckCircle, title: "Expert Certified Trainers", desc: "All coaches are nationally certified with 5+ years of hands-on experience." },
  { icon: FaWifi, title: "Online Classes Available", desc: "Can't make it in? Join live or on-demand classes from anywhere." },
  { icon: FaSnowflake, title: "AC Facility", desc: "Train in comfort year-round with our fully air-conditioned gym." },
  { icon: FaClock, title: "Open 5 AM – 10 PM", desc: "Early birds and night owls both welcome. 7 days a week." },
  { icon: FaParking, title: "Free Parking", desc: "Hassle-free parking available for all members." },
  { icon: FaShower, title: "Clean Changing Rooms", desc: "Hygienic locker rooms and showers for your convenience." },
  { icon: FaUserShield, title: "Personalized Programs", desc: "Custom workout and diet plans tailored to your body and goals." },
  { icon: MdSportsGymnastics, title: "Latest Equipment", desc: "State-of-the-art machines and free weights for every training style." },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-zinc-900" id="about">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            FARIDABAD&apos;S <span className="gradient-text">MOST TRUSTED</span> GYM
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-zinc-400 mb-8 leading-relaxed">
            With a 4.5-star Google rating and 160+ verified reviews, FITXONE GYM has been helping
            Faridabad residents transform their bodies and lives for years. We&apos;re not just a gym —
            we&apos;re a community built on results, respect, and relentless effort.
          </p>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
            <div className="h-48 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" alt="Gym floor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-48 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" alt="Training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-48 overflow-hidden rounded-xl col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80" alt="Community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Right — features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/40 rounded-xl p-5 transition-all group"
            >
              <f.icon className="text-orange-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
