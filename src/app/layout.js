import { AuthProvider } from "@/components/providers/Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Center",
  description: "A descriptive Share Market Mnager Tool for Nepal Share Market",
  icons: {
    icon: "/images/favicon-16X16.png",
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
          <ProgressBarProvider>
            {children}
            <Analytics />
          </ProgressBarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
