import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brady Kelly - Professional Portfolio",
  description: "Created Brady with v0"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* THIS IS THE BACKGROUND: It closes itself immediately. */}
        <div
          className="fixed inset-0 -z-10 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"
        />

        {/* THIS IS THE CONTENT: It sits "above" the background and can grow. */}
        <div className="flex flex-col min-h-screen">
          <header>
            <SiteHeader />
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer>
            <SiteFooter />
          </footer>
        </div>

      </body>
    </html>

  );
}
