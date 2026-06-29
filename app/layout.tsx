import type { Metadata } from "next";
import { Poppins, Oswald, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reinforcedai.com.au"),
  title: {
    default: "REINFORCEDAI™ — AI Safety, Governance & Alignment Engineering",
    template: "%s — REINFORCEDAI",
  },
  description:
    "REINFORCEDAI™ strengthens your AI systems: adversarial evaluation, alignment audits, ISO 42001 / NIST AI RMF / SOC 2 compliance, agent governance, and AI-as-a-Service. Built for Australian organisations that deploy AI in production.",
  keywords: [
    "AI safety",
    "AI governance",
    "AI alignment",
    "ISO 42001",
    "NIST AI RMF",
    "SOC 2 AI",
    "agent evaluation",
    "AI red team",
    "AI risk Australia",
  ],
  openGraph: {
    title: "REINFORCEDAI™ — AI Safety, Governance & Alignment Engineering",
    description:
      "REINFORCEDAI™ empowers organisations to deploy AI safely and responsibly through adversarial evaluation, alignment audits, governance packages, and ISO 42001 / NIST AI RMF compliance.",
    url: "https://reinforcedai.com.au",
    siteName: "REINFORCEDAI",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REINFORCEDAI™ — AI Safety, Governance & Alignment Engineering",
    
    description: "Adversarial evaluation, alignment audits, and ISO 42001 governance for production AI systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${poppins.variable} ${oswald.variable} ${roboto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
