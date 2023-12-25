import type { Metadata } from "next";
import { Providers } from "./providers";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Paagal | Watch Movies Online",
  description: "Watch Movies Online for Free",
};

type RootProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootProps) => (
  <html lang="en">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
