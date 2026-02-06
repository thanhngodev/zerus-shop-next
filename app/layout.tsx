import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Zerus Online Store",
    default: "Zerus Online Store",
  },
  description: "Zerus Online Store - Your One-Stop Shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
