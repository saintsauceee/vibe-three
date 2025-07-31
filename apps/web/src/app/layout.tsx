import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibe Three",
  description: "Make 3D Scenes with Vibe Three",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
