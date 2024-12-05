import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = localFont({
  src: [
    { path: "./fonts/Roboto-Thin.woff", weight: "100" },
    { path: "./fonts/Roboto-Light.woff", weight: "300" },
    { path: "./fonts/Roboto-Regular.woff", weight: "400" },
    { path: "./fonts/Roboto-Medium.woff", weight: "500" },
    { path: "./fonts/Roboto-Bold.woff", weight: "700" },
    { path: "./fonts/Roboto-Black.woff", weight: "900" },
  ],
  variable: "--font-roboto-sans",
});

const dmserifdisplay = localFont({
  src: [
    { path: "./fonts/DMSerifDisplay-Regular.woff", style: "normal" },
    { path: "./fonts/DMSerifDisplay-Italic.woff", style: "italic" },
  ],
  variable: "--font-dmserif-sans",
});

export const metadata = {
  title: {
    default: "Residence Hill | Kopaonik",
    template: "%s - Residence Hill",
  },
  description: "Najluksuzniji resort Residence Hill na Kopaoniku",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`app ${roboto.variable} ${dmserifdisplay.variable}`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
