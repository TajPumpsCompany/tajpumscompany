import { Fira_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

const fontFiraSans = Fira_Sans({
  weight: ["900", "700", "600", "500", "400"],
  subsets: ["latin"],
  variable: "--fira_sans",
});
const fontWorkSans = Work_Sans({
  weight: ["900", "700", "600", "500", "400"],
  subsets: ["vietnamese"],
  variable: "--work-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontWorkSans.variable} ${fontFiraSans.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
