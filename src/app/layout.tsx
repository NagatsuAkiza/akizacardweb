import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Nagatsu Akiza || Card",
  description: "Nagatsu Akiza || Card made by myself"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} w-full bg-[url('https://i.postimg.cc/Rh65m1RY/bg.png')] bg-cover bg-center text-gray-700 shadow-none`}>
        {/* <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div> */}
        {children}
      </body>
    </html>
  );
}
