import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Fitness Programs & Services",
  description: "Explore 14+ fitness programs at FITXONE GYM — HIIT, CrossFit, Yoga, Zumba, Personal Training, Weight Training, Pilates, Nutrition Consulting & more in Sector 23, Faridabad.",
};

const services = [
  {
    name: "HIIT Exercise Classes",
    desc: "High-Intensity Interval Training alternates between short bursts of intense exercise and brief rest. Burns up to 30% more calories than regular cardio, boosts metabolism, and improves heart health. Sessions run 45–60 minutes and are suitable for all fitness levels.",
    benefits: ["Burns fat fast", "Boosts metabolism for 24hr", "Improves cardiovascular health", "No equipment needed"],
    img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80",
    tag: "Most Popular",
  },
  {
    name: "CrossFit",
    desc: "Functional fitness at high intensity. CrossFit combines weightlifting, gymnastics, and metabolic conditioning to build strength, power, and endurance simultaneously. Every session (WOD) is different — you'll never get bored.",
    benefits: ["Total body conditioning", "Builds strength & power", "Community-driven motivation", "Scalable for all levels"],
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    tag: "Challenging",
  },
  {
    name: "Personal Training",
    desc: "1-on-1 coaching sessions designed entirely around YOU. Your trainer will assess your body, understand your goals, create a custom workout plan, monitor your form, and adjust your program as you progress. The fastest way to results.",
    benefits: ["Custom program for your body", "Fastest results guaranteed", "Injury prevention focus", "Flexible scheduling"],
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tag: "Best for Results",
  },
  {
    name: "Yoga Classes",
    desc: "Our yoga classes combine traditional Hatha and Vinyasa flows with modern mindfulness techniques. Improve flexibility, core strength, posture, and mental clarity. Perfect for all ages including seniors and beginners.",
    benefits: ["Improves flexibility", "Reduces stress & anxiety", "Better sleep quality", "Mindfulness & focus"],
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    tag: "Beginner Friendly",
  },
  {
    name: "Zumba",
    desc: "Dance your way to fitness with our high-energy Zumba classes! Latin-inspired rhythms and easy-to-follow choreography make working out feel like a dance party. Burns 400–600 calories per session while having a blast.",
    benefits: ["Burns 400–600 calories", "Improves coordination", "Boosts mood instantly", "No experience needed"],
    img: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=800&q=80",
    tag: "Fun & Energetic",
  },
  {
    name: "Aerobics",
    desc: "Classic group fitness classes with rhythmic exercises that improve cardiovascular endurance and overall fitness. Great for burning calories, improving stamina, and working the full body in a fun, social setting.",
    benefits: ["Improves heart health", "Great calorie burner", "Social & motivating", "All ages welcome"],
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    tag: "Classic",
  },
  {
    name: "Weight Training",
    desc: "Build lean muscle, increase bone density, boost metabolism, and sculpt your physique with our structured weight training programs. Expert trainers guide you through safe, progressive overload for maximum muscle gain.",
    benefits: ["Builds lean muscle", "Increases bone density", "Boosts metabolism", "Full equipment access"],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    tag: "Build Strength",
  },
  {
    name: "Pilates Classes",
    desc: "Core-focused exercises that improve posture, alignment, flexibility, and muscle endurance. Pilates is especially effective for back pain relief, post-injury recovery, and developing the functional strength used in everyday life.",
    benefits: ["Strengthens core", "Relieves back pain", "Improves posture", "Low impact, high results"],
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    tag: "Low Impact",
  },
  {
    name: "Nutrition Consulting",
    desc: "You can't out-train a bad diet. Our nutrition experts create personalized meal plans based on your body composition, health goals, food preferences, and lifestyle. Supplement advice, grocery lists, and weekly check-ins included.",
    benefits: ["Custom diet plan", "Supplement guidance", "Body composition tracking", "Weekly check-ins"],
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    tag: "Essential",
  },
  {
    name: "Cycling Classes",
    desc: "Indoor cycling classes that simulate road and mountain biking in a fun group setting. Excellent for cardiovascular fitness, leg strength, and calorie burning — all with zero joint impact. Perfect for all fitness levels.",
    benefits: ["Low impact cardio", "Builds leg strength", "Burns 500+ calories", "Great for knees"],
    img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    tag: "Low Impact",
  },
  {
    name: "Youth Sports & Classes",
    desc: "Specially designed programs for children and teenagers that build athletic ability, teamwork, discipline, and confidence. Includes sports training, agility drills, and age-appropriate fitness classes that kids actually enjoy.",
    benefits: ["Age-appropriate training", "Builds confidence", "Team & social skills", "Lifelong fitness habits"],
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    tag: "Kids & Teens",
  },
  {
    name: "Dance Fitness Classes",
    desc: "High-energy dance workouts that combine multiple dance styles with fitness moves. Burns serious calories while having fun. No dance experience required — just bring your energy and enthusiasm!",
    benefits: ["Burns 400+ calories", "Multiple dance styles", "No experience needed", "Great for all ages"],
    img: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=800&q=80",
    tag: "Fun",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-zinc-950 bg-grid">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white tracking-wide mb-4">
            ALL FITNESS <span className="gradient-text">PROGRAMS</span>
          </h1>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            14+ expert-led programs for every goal, age, and fitness level. Online classes available too!
          </p>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          {services.map((s, i) => (
            <div key={s.name} className={`bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">{s.tag}</div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="font-oswald text-2xl text-white uppercase tracking-wide mb-3">{s.name}</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">{s.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {s.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-all w-fit">
                  Book This Class <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-10 max-w-3xl mx-auto">
            <h2 className="font-bebas text-4xl text-white tracking-wide mb-3">READY TO TRY ONE FOR FREE?</h2>
            <p className="text-orange-100 mb-6">Your first session is completely free — no strings attached.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-zinc-100 transition-colors">
                Book Free Trial
              </Link>
              <a href="tel:+917217829394" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
                Call: 072178 29394
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
