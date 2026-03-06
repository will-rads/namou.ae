import type { Metadata } from "next";
import { AreaProvider } from "@/context/AreaContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namou Properties",
  description: "Real Estate Done Right — Namou land investment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <AreaProvider>{children}</AreaProvider>
      </body>
    </html>
  );
}
