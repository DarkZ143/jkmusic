import type { Metadata } from "next";
import BrandLoader from "./brand-loader";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Music Club | Academy of Indian Music",
  description:
    "Discover Indian classical music at JK Music Club. Explore vocal and instrumental courses, baithaks, and a complimentary riyaz trial rooted in the Guru–Shishya tradition.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BrandLoader />
      </body>
    </html>
  );
}
