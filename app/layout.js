import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBackgroundVideo from "../components/GlobalBackgroundVideo";

export const metadata = {
  title: "Niva Group India",
  description: "Corporate website for Niva Group India"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative isolate">
        <GlobalBackgroundVideo />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
