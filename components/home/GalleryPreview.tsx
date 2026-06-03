import Link from "next/link";

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Gym floor" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80", alt: "Training session" },
  { src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80", alt: "Group class" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80", alt: "Aerobics class" },
  { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80", alt: "Yoga session" },
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80", alt: "Weight training" },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-zinc-900" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-oswald uppercase tracking-widest text-sm mb-3">Our Facility</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            INSIDE <span className="gradient-text">FITXONE</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            Modern equipment, clean facilities, and a vibrant community. Come see it for yourself.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-xl group cursor-pointer ${i === 0 || i === 5 ? "row-span-1 md:row-span-1" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 border-2 border-zinc-700 hover:border-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:bg-orange-500/10">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
