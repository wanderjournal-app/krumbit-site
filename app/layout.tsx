import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krumbit.easynet.world"),
  title: "Krumbit — Learn While You Scroll",
  description: "Turn short-form scrolling into short-form learning with bite-sized video lessons, quick quizzes, streaks, and progress tracking.",
  icons: { icon: "/krumbit-icon.png", apple: "/krumbit-icon.png" },
  openGraph: {
    title: "Krumbit — Learn While You Scroll",
    description: "Keep the scroll. Change what it gives you.",
    type: "website",
  },
  twitter: { card: "summary", title: "Krumbit — Learn While You Scroll", description: "Keep the scroll. Change what it gives you." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
