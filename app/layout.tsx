import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { ProvideAuth } from "@/src/hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knigolove",
  description: "Read books and explore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvideAuth>
          <Header />
          {children}
        </ProvideAuth>
      </body>
    </html>
  );
}
