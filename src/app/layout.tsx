import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const font = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelly & Co Property Services | Expert Mowing & Landscaping",
  description: "Professional mowing, landscaping, and property maintenance services for the Cedar Valley, Iowa. Get a free estimate today.",
  openGraph: {
    title: "Kelly & Co Property Services",
    description: "Professional mowing, landscaping, and property maintenance for the Cedar Valley, Iowa.",
    siteName: "Kelly & Co Property Services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Kelly & Co Property Services",
    description: "Professional mowing, landscaping, and property maintenance for the Cedar Valley, Iowa.",
  },
  metadataBase: new URL("https://kelly-co.pages.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${font.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
