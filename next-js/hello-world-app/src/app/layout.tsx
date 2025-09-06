import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Ashok Kumar - Engineering Leader',
  description: 'Engineering leader with 23+ years of experience delivering enterprise-scale SaaS & on-premises products across Healthcare, EHS, and Test & Measurement domains.',
  keywords: 'engineering leader, software development, healthcare technology, team building, digital transformation',
  authors: [{ name: 'Ashok Kumar' }],
  openGraph: {
    title: 'Ashok Kumar - Engineering Leader',
    description: '23+ years of experience in enterprise software development and team leadership',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashok Kumar - Engineering Leader',
    description: '23+ years of experience in enterprise software development and team leadership',
  },
}

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
      <div className="bg-animation">
          <div className="floating-shapes">
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
          </div>
      </div>

        {children}
      </body>
    </html>
  );
}
