"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917859995004?text=Hi%20Indian%20Fitness%20Zone!%20I%27d%20like%20to%20know%20more%20about%20your%20gym%20membership."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/40 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />
    </a>
  );
}
