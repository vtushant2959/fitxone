import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery — Indian Fitness Zone GYM Faridabad",
  description: "See inside Indian Fitness Zone GYM — state-of-the-art equipment, AC facility, group classes, personal training, and more in Sector 23, Faridabad.",
};

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Gym Floor", category: "Facility" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", alt: "HIIT Training", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80", alt: "Group Fitness", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", alt: "Aerobics Class", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80", alt: "Yoga Session", category: "Yoga" },
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80", alt: "Weight Training", category: "Strength" },
  { src: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80", alt: "Cardio Area", category: "Facility" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", alt: "Personal Training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=800&q=80", alt: "Zumba Class", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80", alt: "Cycling Class", category: "Cycling" },
  { src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80", alt: "Nutrition Coaching", category: "Nutrition" },
  { src: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80", alt: "Morning Workout", category: "Training" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-zinc-950 bg-grid">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Our Facility</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white tracking-wide mb-4">
            INSIDE <span className="gradient-text">Indian Fitness Zone GYM</span>
          </h1>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            State-of-the-art equipment, AC facility, and an inspiring environment to help you reach your fitness goals.
          </p>
        </div>
      </section>

      <section className="py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-xl group relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-sm">{img.alt}</p>
                    <span className="text-xs text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded-full">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-lg">
              <p className="text-2xl mb-2">📸</p>
              <p className="text-zinc-400 mb-4">Want to see more? Follow us on Instagram for daily updates, transformation stories, and workout tips!</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                  Follow on Instagram
                </a>
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
                  Visit Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
