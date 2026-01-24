import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Provider } from "@/components/ui/provider";
import { Box, Center, Flex } from "@chakra-ui/react";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Flex direction="column" minHeight="100vh">
            <Box as="header" paddingX="4">
              <SiteHeader />
            </Box>
            <Box as="main" flexGrow={1} padding={4}>
              {children}
            </Box>
            <Box as="footer">
              <SiteFooter />
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
