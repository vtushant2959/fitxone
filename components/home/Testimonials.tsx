import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Malhotra",
    role: "Lost 22kg in 6 months",
    text: "Indian Fitness Zone GYM completely changed my life. The trainers here are incredibly dedicated and the atmosphere keeps you motivated every single day. Best gym in Faridabad, hands down!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Pooja Singh",
    role: "Yoga & Zumba Member",
    text: "I've tried many gyms but Indian Fitness Zone is different. The yoga and Zumba classes are amazing. Coach Priya and Neha are super professional. The facility is always clean and AC is a bonus in summer!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Arjun Khanna",
    role: "CrossFit Enthusiast",
    text: "The CrossFit classes at Indian Fitness Zone are top-notch. Coach Amit pushes you just enough and knows exactly how to help you hit your goals. Highly recommend to anyone serious about fitness.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    name: "Meena Rao",
    role: "Weight Loss Journey",
    text: "Joined Indian Fitness Zone after my doctor advised exercise. The team designed a custom program for me and the nutrition consulting was game-changing. Lost 15kg and feel healthier than ever!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Deepak Verma",
    role: "Youth Program Parent",
    text: "My son joined the Youth Sports program and the transformation has been incredible. He's more active, disciplined and confident now. The trainers genuinely care about the kids.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    name: "Kavita Sharma",
    role: "Personal Training Client",
    text: "Personal training with Coach Rahul is 100% worth it. He created a program specifically for my body type and goals. In just 3 months I gained strength I never thought possible.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-zinc-950 bg-grid" id="reviews">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Success Stories</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            REAL RESULTS, <span className="gradient-text">REAL PEOPLE</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1,2,3,4,5].map(i => <FaStar key={i} className="text-orange-400 text-xl" />)}
          </div>
          <p className="text-zinc-400">4.5 stars · 160+ Google Reviews</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5">
              <FaQuoteLeft className="text-orange-500/30 text-3xl mb-4" />
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-orange-500/30" />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-orange-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({length: t.stars}).map((_, i) => <FaStar key={i} className="text-orange-400 text-xs" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/search/Indian Fitness Zone+GYM+Sector+23+Faridabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/40 text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            <FaStar className="text-orange-400" />
            Read All 160+ Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
