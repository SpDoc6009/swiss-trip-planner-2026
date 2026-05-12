import "leaflet/dist/leaflet.css";
import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "2026 \u745e\u58eb\u6e56\u5149\u5c71\u8272\u81ea\u99d5\u65c5\u884c",
  description:
    "\u70ba\u53f0\u7063\u65c5\u5ba2\u8a2d\u8a08\u7684\u745e\u58eb 11 \u5929\u4e92\u52d5\u884c\u7a0b\u3001\u5730\u5716\u3001\u5929\u6c23\u3001\u9810\u8a02\u8207\u4ea4\u901a\u8cbb\u7528\u898f\u5283\u7db2\u7ad9\u3002",
  applicationName: "Swiss Trip 2026",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "\u745e\u58eb\u81ea\u99d5\u904a",
    statusBarStyle: "black-translucent"
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className={notoSansTc.className}>
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
