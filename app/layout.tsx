import Link from "next/link";
import "./globals.css";
import { Noto_Sans_Javanese } from "next/font/google";
import Sidebar from "./components/UI/Sidebar";

const noto = Noto_Sans_Javanese({
  subsets: ["latin"],
  variable: "--font-noto",
});

export const metadata = {
  title: "Dashboard",
  description: "Dashboard page for landalearn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto.variable} font-noto  w-[100vw]`}>
        <div className="flex">
          <nav className="md:w-[40%] lg:w-[20%]  min-h-[100vh] hidden md:block">
            <Sidebar />
          </nav>
          <main className="w-[100vw] min-h-full md:flex-1 bg-[#FFFFFF]/60 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
