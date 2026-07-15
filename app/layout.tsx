import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krumbit-app.easynet.world"),
  title: "Krumbit — Your Next Scroll Can Make You Smarter",
  description: "Replace mindless scrolling with quick visual lessons, one-question recall, and progress you can see. Download Krumbit free on iPhone and iPad.",
  icons: { icon: "/krumbit-icon.png", apple: "/krumbit-icon.png" },
  openGraph: {
    title: "Your next scroll can make you smarter.",
    description: "Watch a quick lesson, answer one question, and leave with something useful you can actually remember.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Krumbit turns a short learning video into recall and visible progress" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your next scroll can make you smarter.",
    description: "Watch a quick lesson, answer one question, and leave with something useful.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
