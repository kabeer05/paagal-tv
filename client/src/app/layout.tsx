import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paagal | Watch Movies Online",
  description: "Watch Movies Online for Free",
};

type RootProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootProps) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
