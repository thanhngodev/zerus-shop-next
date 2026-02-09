import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../globals.css";

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
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </ClerkProvider>
  );
}
