import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Footer from "./ui/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Youki Lewis",
    default: "Youki Lewis"
  },
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.className, "bg-cream")}>
        {children}
      </body>
    </html>
  );
}
