import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  metadataBase: new URL("https://indianfitnesszone.in"),
  title: {
    default: "Indian Fitness Zone | Best Gym in Ballabgarh, Faridabad",
    template: "%s | Indian Fitness Zone Faridabad",
  },
  description:
    "Indian Fitness Zone — Top-rated gym (4.7★) in Ballabgarh, Faridabad. Expert personal training & weight training on Sohna Rd, opposite Hero Agency, Sanjay Colony. Join today & get your first session FREE!",
  keywords: [
    "gym Ballabgarh", "gym Faridabad", "Indian Fitness Zone", "personal training Ballabgarh",
    "weight training Faridabad", "best gym Sohna Road Faridabad", "gym Sanjay Colony Ballabgarh",
    "fitness center Ballabgarh", "gym near me Ballabgarh", "personal trainer Faridabad",
    "weight loss gym Faridabad", "muscle building gym Ballabgarh", "gym 2nd floor Sohna Rd",
    "strength training Faridabad", "affordable gym membership Ballabgarh",
  ],
  authors: [{ name: "Indian Fitness Zone" }],
  creator: "Indian Fitness Zone",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indianfitnesszone.in",
    siteName: "Indian Fitness Zone",
    title: "Indian Fitness Zone — Transform Your Body | Ballabgarh, Faridabad",
    description:
      "Ballabgarh's top-rated gym! Expert personal trainers, professional weight training, and a results-driven fitness community. Open daily till 10 PM. First session FREE!",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Indian Fitness Zone Ballabgarh Faridabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Fitness Zone — Best Gym in Ballabgarh, Faridabad",
    description: "Expert personal training & weight training in Ballabgarh. 4.7★ rated. Join today!",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://indianfitnesszone.in" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "Indian Fitness Zone",
              url: "https://indianfitnesszone.in",
              telephone: "+917859995004",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2nd Floor, Sohna Rd, opposite Hero Agency, Block F, Sanjay Colony",
                addressLocality: "Ballabgarh, Faridabad",
                addressRegion: "Haryana",
                postalCode: "121005",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 28.3420, longitude: 77.3219 },
              openingHoursSpecification: [{
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "05:00",
                closes: "22:00",
              }],
              priceRange: "₹₹",
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "7" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fitness Services",
                itemListElement: ["Personal Training", "Weight Training"],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} font-inter bg-zinc-950 text-white antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{ style: { background: "#18181b", color: "#fff", border: "1px solid #f97316" } }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
