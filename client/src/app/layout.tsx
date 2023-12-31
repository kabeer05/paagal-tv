import type { Metadata } from "next";
import "../styles/globals.css";

// Components
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Paagal | Watch Movies Online",
  description: "Watch Movies Online for Free",
};

type RootProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootProps) => (
  <html lang="en">
    <body className="bg-rich-black">
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
