import type { Metadata } from "next";
import { ClashDisplay } from "@/lib/Font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avion",
  description: "Best Store to get your Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ClashDisplay.className}>{children}</body>
    </html>
  );
}
