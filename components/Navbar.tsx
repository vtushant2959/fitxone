"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaDumbbell, FaPhone } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-orange-500/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition-colors">
              <FaDumbbell className="text-white text-lg" />
            </div>
            <div>
              <span className="font-bebas text-2xl text-white tracking-wider">FITX<span className="text-orange-500">ONE</span></span>
              <p className="text-[9px] text-zinc-400 tracking-widest uppercase -mt-1">GYM · Sector 23 Faridabad</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-zinc-300 hover:text-orange-400 text-sm font-medium tracking-wide transition-colors uppercase"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917217829394"
              className="flex items-center gap-2 text-zinc-300 hover:text-orange-400 text-sm transition-colors"
            >
              <FaPhone className="text-orange-500" />
              072178 29394
            </a>
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors pulse-orange"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-zinc-900/98 backdrop-blur-md border-t border-zinc-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-orange-400 text-base font-medium py-2 border-b border-zinc-800 uppercase tracking-wide"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+917217829394"
              className="flex items-center gap-2 text-orange-400 py-2"
            >
              <FaPhone /> 072178 29394
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-orange-500 text-white text-center font-semibold py-3 rounded-lg"
            >
              Get Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
