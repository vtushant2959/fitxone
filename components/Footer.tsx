import Link from "next/link";
import { FaDumbbell, FaPhone, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

const services = [
  "HIIT Classes", "CrossFit", "Personal Training", "Yoga Classes",
  "Zumba", "Weight Training", "Aerobics", "Pilates", "Nutrition Consulting", "Cycling",
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Top CTA strip */}
      <div className="bg-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-oswald text-xl text-white tracking-wide uppercase">
            Start Your Fitness Journey Today — First Session FREE!
          </p>
          <a
            href="tel:+917217829394"
            className="bg-white text-orange-600 font-bold px-6 py-2 rounded-lg hover:bg-zinc-100 transition-colors whitespace-nowrap"
          >
            Call Now: 072178 29394
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
              <FaDumbbell className="text-white" />
            </div>
            <span className="font-bebas text-2xl tracking-wider">FITX<span className="text-orange-500">ONE</span> GYM</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            Faridabad's top-rated fitness center with 4.5★ rating and 160+ happy members.
            We transform lives through expert training, nutrition, and community.
          </p>
          <div className="flex gap-3">
            {[
              { icon: FaInstagram, href: "#", color: "hover:bg-pink-600" },
              { icon: FaFacebook, href: "#", color: "hover:bg-blue-600" },
              { icon: FaYoutube, href: "#", color: "hover:bg-red-600" },
              { icon: FaWhatsapp, href: "https://wa.me/917217829394", color: "hover:bg-green-600" },
            ].map(({ icon: Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 bg-zinc-800 ${color} rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-oswald text-lg uppercase tracking-wider text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-zinc-400 hover:text-orange-400 text-sm flex items-center gap-2 transition-colors">
                  <span className="w-1 h-1 bg-orange-500 rounded-full inline-block"></span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-oswald text-lg uppercase tracking-wider text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/pricing", label: "Membership Plans" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Free Trial" },
              { href: "/contact", label: "Book a Session" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-zinc-400 hover:text-orange-400 text-sm flex items-center gap-2 transition-colors">
                  <span className="w-1 h-1 bg-orange-500 rounded-full inline-block"></span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-oswald text-lg uppercase tracking-wider text-white mb-4">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-orange-500 mt-1 shrink-0" />
              <p className="text-zinc-400 text-sm">Block F, Sanjay Colony, Sector 23, Faridabad, Haryana 121005</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhone className="text-orange-500 shrink-0" />
              <a href="tel:+917217829394" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">072178 29394</a>
            </div>
            <div className="flex gap-3 items-center">
              <FaClock className="text-orange-500 shrink-0" />
              <p className="text-zinc-400 text-sm">Mon–Sun: 5:00 AM – 10:00 PM</p>
            </div>
          </div>
          <div className="mt-5 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.1!2d77.3178!3d28.3811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFITXONE+GYM!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="120"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="FITXONE GYM Location"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} FITXONE GYM. All rights reserved.</p>
          <p>Block F, Sanjay Colony, Sector 23, Faridabad, Haryana 121005</p>
        </div>
      </div>
    </footer>
  );
}
