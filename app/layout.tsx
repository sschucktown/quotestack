import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuoteStack — Send Professional Proposals in Minutes",
  description: "Good/Better/Best proposals with instant Stripe deposits.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
