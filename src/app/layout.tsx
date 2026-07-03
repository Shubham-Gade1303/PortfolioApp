import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SITE } from "@/constants/data";

const siteUrl = "https://shubhampatil.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.tagline,
  keywords: [
    "Java Developer",
    "Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    SITE.name,
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
    url: siteUrl,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgressBar />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
