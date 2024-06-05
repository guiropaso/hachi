import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../font/Gagalin-Regular.otf",
  display: "swap",
  variable: "--font-gagalin",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HACHI",
  description: "The cat dragon memecoin on SOlana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${myFont.variable} bg-[#e2eaef]`}>
        {children}
      </body>
    </html>
  );
}
