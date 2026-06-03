import { FaCheckCircle, FaSnowflake, FaParking, FaShower, FaUserShield, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const features = [
  { icon: FaCheckCircle, title: "Certified Expert Trainers", desc: "All coaches hold national certifications and have years of hands-on coaching experience." },
  { icon: FaSnowflake, title: "AC Facility", desc: "Train comfortably year-round in our fully air-conditioned gym floor." },
  { icon: FaClock, title: "Open 5 AM – 10 PM", desc: "Early morning or late evening — we are open 7 days a week for your convenience." },
  { icon: FaParking, title: "Easy Access Location", desc: "Located on 2nd Floor, Sohna Rd — easily accessible from Ballabgarh and nearby areas." },
  { icon: FaShower, title: "Clean Changing Rooms", desc: "Hygienic locker rooms so you can freshen up before or after your workout." },
  { icon: FaUserShield, title: "Personalised Programs", desc: "Every member gets a training plan built around their body, goals, and schedule." },
  { icon: FaMapMarkerAlt, title: "Prime Ballabgarh Location", desc: "Opposite Hero Agency on Sohna Road — right in the heart of Ballabgarh." },
  { icon: FaCheckCircle, title: "Beginner to Advanced", desc: "Whether you are new to fitness or a seasoned athlete, our programs scale to you." },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-zinc-900" id="about">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            BALLABGARH&apos;S <span className="gradient-text">MOST TRUSTED</span> GYM
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-zinc-400 mb-8 leading-relaxed">
            With a 4.7-star Google rating, Indian Fitness Zone is the top choice for personal training
            and weight training in Ballabgarh and Faridabad. Our gym is built on results —
            every session is purposeful, every trainer is passionate, and every member is treated like family.
          </p>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
            <div className="h-48 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" alt="Personal training session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-48 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80" alt="Weight training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-48 overflow-hidden rounded-xl col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80" alt="Gym community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
