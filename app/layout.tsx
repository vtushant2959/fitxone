import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fitxonegym.in"),
  title: {
    default: "FITXONE GYM Sector 23 Faridabad | Best Gym Near You",
    template: "%s | FITXONE GYM Faridabad",
  },
  description:
    "FITXONE GYM in Sector 23, Faridabad — Top-rated gym (4.5★, 160+ reviews). Expert personal training, HIIT, CrossFit, Yoga, Zumba, Weight Training & more. Join now and transform your body!",
  keywords: [
    "gym Faridabad", "best gym sector 23 Faridabad", "FITXONE GYM",
    "personal training Faridabad", "CrossFit Faridabad", "HIIT classes Faridabad",
    "yoga classes Faridabad", "weight training Faridabad", "Zumba Faridabad",
    "fitness center sector 23", "gym near me Faridabad", "gym Sanjay Colony",
    "affordable gym membership Faridabad", "online fitness classes",
  ],
  authors: [{ name: "FITXONE GYM" }],
  creator: "FITXONE GYM",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fitxonegym.in",
    siteName: "FITXONE GYM",
    title: "FITXONE GYM — Transform Your Body | Sector 23, Faridabad",
    description:
      "Join Faridabad's top-rated gym! Expert coaches, 14+ fitness classes, personal training & nutrition consulting. Open daily till 10 PM. First session FREE!",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FITXONE GYM Sector 23 Faridabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FITXONE GYM — Transform Your Body | Faridabad",
    description: "Faridabad's top-rated gym with 14+ fitness programs. Join now!",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fitxonegym.in" },
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
              name: "FITXONE GYM",
              url: "https://fitxonegym.in",
              telephone: "+917217829394",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Block F, Sanjay Colony",
                addressLocality: "Sector 23, Faridabad",
                addressRegion: "Haryana",
                postalCode: "121005",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 28.3811, longitude: 77.3178 },
              openingHoursSpecification: [{
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "05:00",
                closes: "22:00",
              }],
              priceRange: "₹₹",
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "160" },
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
