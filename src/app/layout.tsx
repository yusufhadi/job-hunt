import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Image from "next/image";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} relative overflow-x-hidden`}>
        <div>Navbar</div>
        <main>
          <div className="w-full h-screen absolute top-0 -z-10" />
          <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
            <Image src="/images/pattern.png" alt="/images/pattern.png" fill />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
