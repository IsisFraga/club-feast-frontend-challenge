import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Movie Database (TMDB)",
  description:
    "The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
