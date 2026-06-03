"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaPhone, FaWhatsapp } from "react-icons/fa";

const goals = ["Lose Weight", "Build Muscle", "Improve Fitness", "Learn Yoga/Pilates", "Sports Training", "Nutrition Coaching"];
const programs = ["HIIT", "CrossFit", "Personal Training", "Yoga", "Zumba", "Weight Training", "Aerobics", "Pilates", "Cycling", "Nutrition Consulting"];

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "", program: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("🎉 Your free trial session is booked! We'll call you within 2 hours.");
        setForm({ name: "", phone: "", email: "", goal: "", program: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please call us directly at 072178 29394.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden" id="free-trial">
      {/* Background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=40')", backgroundSize: "cover" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Limited Time Offer</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            GET YOUR <span className="gradient-text">FREE</span><br />TRIAL SESSION
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
            No commitment. No credit card. Just show up and experience the Indian Fitness Zone difference.
            Our trainers will assess your fitness level and recommend the perfect program for your goals.
          </p>

          <div className="space-y-4 mb-8">
            {[
              "✅ Full gym floor access for a day",
              "✅ One group class of your choice",
              "✅ Fitness & body assessment",
              "✅ Personalized program recommendation",
              "✅ Meet your future trainer",
            ].map((item) => (
              <p key={item} className="text-zinc-300">{item}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+917217829394"
              className="flex items-center gap-2 bg-white text-zinc-900 font-bold px-6 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              <FaPhone className="text-orange-500" />
              072178 29394
            </a>
            <a
              href="https://wa.me/917217829394?text=Hi! I'd like to book a free trial session at Indian Fitness Zone GYM."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-zinc-950/80 backdrop-blur border border-zinc-800 rounded-2xl p-8">
          <h3 className="font-oswald text-2xl text-white uppercase tracking-wide mb-2">Book Free Trial</h3>
          <p className="text-zinc-400 text-sm mb-6">Fill out the form and we'll call you within 2 hours!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors text-sm"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors text-sm"
              />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors text-sm"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <select
                name="goal"
                value={form.goal}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm"
              >
                <option value="" className="text-zinc-500">Fitness Goal</option>
                {goals.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm"
              >
                <option value="">Interested Program</option>
                {programs.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about yourself or any health concerns..."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] pulse-orange"
            >
              {loading ? "Booking Your Spot..." : <>Claim Free Trial Session <FaArrowRight /></>}
            </button>
            <p className="text-zinc-500 text-xs text-center">
              By submitting, you agree to be contacted by Indian Fitness Zone GYM via phone/WhatsApp. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
