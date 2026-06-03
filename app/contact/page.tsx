import type { Metadata } from "next";
import LeadForm from "@/components/home/LeadForm";
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact & Free Trial",
  description: "Book your FREE trial session at Indian Fitness Zone GYM Sector 23 Faridabad. Call 072178 29394 or fill the form. Open 5 AM – 10 PM daily.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-zinc-950 bg-grid">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white tracking-wide mb-4">
            CONTACT <span className="gradient-text">Indian Fitness Zone GYM</span>
          </h1>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            Ready to start your transformation? Book your FREE trial or get answers to any questions.
            We respond fast — usually within 2 hours!
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-12 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: FaMapMarkerAlt,
              title: "Our Location",
              lines: ["Block F, Sanjay Colony", "Sector 23, Faridabad", "Haryana 121005"],
              link: "https://maps.google.com/?q=Indian Fitness Zone+GYM+Sector+23+Faridabad",
              linkText: "Get Directions",
            },
            {
              icon: FaPhone,
              title: "Call / WhatsApp",
              lines: ["072178 29394", "Available 5 AM – 10 PM"],
              link: "tel:+917217829394",
              linkText: "Call Now",
            },
            {
              icon: FaClock,
              title: "Working Hours",
              lines: ["Monday – Sunday", "5:00 AM – 10:00 PM", "Open All Days"],
              link: null,
              linkText: null,
            },
            {
              icon: FaWhatsapp,
              title: "WhatsApp",
              lines: ["Chat with us instantly", "Fastest response", "072178 29394"],
              link: "https://wa.me/917217829394",
              linkText: "WhatsApp Now",
            },
          ].map((card) => (
            <div key={card.title} className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 text-center hover:border-orange-500/40 transition-all">
              <card.icon className="text-orange-400 text-3xl mx-auto mb-3" />
              <h3 className="font-oswald text-lg text-white uppercase tracking-wide mb-2">{card.title}</h3>
              {card.lines.map((l) => <p key={l} className="text-zinc-400 text-sm">{l}</p>)}
              {card.link && (
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-orange-400 hover:text-orange-300 text-sm font-semibold underline underline-offset-2">
                  {card.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <LeadForm />

      {/* Map */}
      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bebas text-4xl text-white text-center mb-8 tracking-wide">FIND US ON THE <span className="gradient-text">MAP</span></h2>
          <div className="rounded-2xl overflow-hidden border border-zinc-800 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.1!2d77.3178!3d28.3811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndian Fitness Zone+GYM+Sector+23+Faridabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Indian Fitness Zone GYM Map"
            />
          </div>
          <p className="text-center text-zinc-500 text-sm mt-4">
            Block F, Sanjay Colony, Sector 23, Faridabad, Haryana 121005
          </p>
        </div>
      </section>

      {/* Social */}
      <section className="bg-zinc-900 py-10 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-zinc-400 mb-4">Follow us for daily workouts, tips, and motivation</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
              { icon: FaFacebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
              { icon: FaWhatsapp, href: "https://wa.me/917217829394", label: "WhatsApp", color: "hover:bg-green-600" },
            ].map(({ icon: Icon, href, label, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`w-12 h-12 bg-zinc-800 ${color} rounded-xl flex items-center justify-center text-white transition-all hover:scale-110`}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
