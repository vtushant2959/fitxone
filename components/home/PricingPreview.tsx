import Link from "next/link";
import { FaCheck, FaFire, FaArrowRight } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    desc: "Perfect for beginners starting their fitness journey",
    features: ["Gym floor access", "Locker room & shower", "3 group classes/month", "Fitness assessment", "Open 5 AM – 10 PM"],
    color: "border-zinc-700",
    badge: null,
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹1,799",
    period: "/month",
    desc: "Our most popular plan for serious fitness enthusiasts",
    features: ["All Starter benefits", "Unlimited group classes", "1 personal training session/month", "Nutrition guidance", "Guest pass (1/month)", "Online class access"],
    color: "border-orange-500",
    badge: "🔥 Most Popular",
    cta: "Join Premium",
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹2,999",
    period: "/month",
    desc: "Maximum results with personalized coaching & nutrition",
    features: ["All Premium benefits", "4 personal training sessions/month", "Custom diet plan", "Body composition tracking", "Priority class booking", "Guest pass (3/month)"],
    color: "border-zinc-700",
    badge: null,
    cta: "Go Elite",
    highlight: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="py-20 bg-zinc-950 bg-grid" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Membership Plans</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            SIMPLE, <span className="gradient-text">AFFORDABLE</span> PRICING
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            No hidden fees. No long-term lock-ins. Just great training at honest prices.
            First session always FREE!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-zinc-900 border-2 ${plan.color} rounded-2xl p-8 relative ${plan.highlight ? "ring-1 ring-orange-500/30 shadow-2xl shadow-orange-500/10 scale-105" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <FaFire /> {plan.badge}
                </div>
              )}
              <h3 className="font-oswald text-2xl text-white uppercase tracking-wide mb-1">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{plan.desc}</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="font-bebas text-5xl gradient-text">{plan.price}</span>
                <span className="text-zinc-400 pb-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                    <FaCheck className="text-orange-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${plan.highlight ? "bg-orange-500 hover:bg-orange-400 text-white" : "border-2 border-zinc-700 hover:border-orange-500 text-white hover:bg-orange-500/10"}`}
              >
                {plan.cta} <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          Annual plans available with <span className="text-orange-400">20% off</span>. Corporate & student discounts available.
          <a href="tel:+917217829394" className="text-orange-400 hover:underline ml-1">Call for details.</a>
        </p>
      </div>
    </section>
  );
}
