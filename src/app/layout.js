import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Provider from "@/components/darkmode/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen mx-auto flex flex-col bg-white 
      dark:bg-gray-900"
      >
        <Provider>
          <Navbar />
          <main className="flex flex-col flex-1  w-full   ">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
