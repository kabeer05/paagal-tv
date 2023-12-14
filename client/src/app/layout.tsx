import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paagal | Watch Movies Online",
  description: "Watch Movies Online for Free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
