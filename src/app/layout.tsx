import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";



const nunito = Nunito({
  variable: "--font-nunito", 
  subsets: ["latin"],
  weight: ["400", "700"], 
});



export const metadata: Metadata = {
  title: "MAZAADY App",
  description: "Task For MAZAADY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
       <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
