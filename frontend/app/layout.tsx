import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from "./providers/AuthProvider";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JobHunt",
  description: "A job search app based on nextjs and django rest framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme="light">
          <ToasterProvider />
            <UserProvider userSignedIn={false}>
              {children}
            </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
