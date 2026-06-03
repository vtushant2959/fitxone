import type { Metadata } from "next";
import PricingPreview from "@/components/home/PricingPreview";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Gym Membership Plans & Pricing",
  description: "Affordable gym membership plans at Indian Fitness Zone GYM Sector 23 Faridabad. Starting from ₹999/month. No hidden fees. First session FREE!",
};

const faqs = [
  { q: "Is there a joining fee?", a: "No! There are no joining fees or hidden charges. You only pay the monthly membership fee." },
  { q: "Can I try before I join?", a: "Absolutely! Your first session at Indian Fitness Zone GYM is completely FREE, no credit card required." },
  { q: "Are there annual plan discounts?", a: "Yes! Annual memberships come with a 20% discount. Contact us for the exact pricing." },
  { q: "Do you offer student or corporate discounts?", a: "Yes! We have special rates for students and corporate group memberships. Call us for details." },
  { q: "Can I freeze my membership?", a: "Yes, you can freeze your membership for up to 1 month per year in case of illness or travel." },
  { q: "Are online classes included?", a: "Online classes are included in Premium and Elite plans. Starter members can purchase add-ons." },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-zinc-950 bg-grid">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Membership</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white tracking-wide mb-4">
            PLANS & <span className="gradient-text">PRICING</span>
          </h1>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            Transparent pricing with no surprises. Cancel anytime. First session always FREE!
          </p>
        </div>
      </section>

      <PricingPreview />

      {/* What's included detail */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-bebas text-4xl text-white text-center tracking-wide mb-10">
            EVERY MEMBERSHIP <span className="gradient-text">INCLUDES</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Full gym floor access", "Locker room & shower", "Fitness assessment on join",
              "Safety & equipment orientation", "AC facility", "Free parking",
              "Friendly & certified staff", "Clean & hygienic facility", "Progress tracking",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <FaCheck className="text-orange-400 shrink-0" />
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-zinc-950 bg-grid">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-bebas text-4xl text-white text-center tracking-wide mb-10">
            FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-zinc-400 mb-4">Still have questions? We&apos;re happy to help!</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
