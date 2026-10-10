import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.name + " | " + siteConfig.tagline,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg-main text-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}