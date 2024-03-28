import React from "react";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { Search } from "@mui/icons-material";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

// const materialIcons = MaterialIcons(
//   { subsets: ["outlined", "rounded", "sharp"] }
// );

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "(주)한국HRD컨설팅그룹",
  description: "한국HRD컨설팅그룹",
};

export default function RootLayout({ children }) {


  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
