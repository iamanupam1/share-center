import ProgressBarProvider from "./ProgressBarProvider";
import { AuthProvider } from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Center",
  description: "A collection for Nepal Share Market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
