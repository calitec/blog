import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import Header from "@/components/header";
import Footer from "@/components/footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: '블로그',
    template: '%s | 블로그'
  },
  description: '일상, 정보, 그리고 유용한 이야기를 공유하는 공간입니다',
  keywords: ['블로그', '정보', '일상', '라이프스타일', '꿀팁'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    title: '블로그',
    description: '일상, 정보, 그리고 유용한 이야기를 공유하는 공간입니다',
    siteName: '블로그',
  },
  twitter: {
    card: 'summary_large_image',
    title: '블로그',
    description: '일상, 정보, 그리고 유용한 이야기를 공유하는 공간입니다',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1261297941647436"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${notoSansKR.variable} font-sans`}>
        <Analytics />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
