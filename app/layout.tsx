import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POS Monkey | ระบบ POS ร้านอาหารและค้าปลีก อันดับ 1 ที่คุณวางใจ",
  description:
    "ระบบ POS ที่ดีที่สุดสำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก ใช้งานง่าย เริ่มต้นฟรี รองรับ QR Code, Delivery และ Stock ตัดสต็อกแม่นยำ - ทางเลือกที่ดีกว่า",
  keywords: [
    "POS",
    "ระบบ POS",
    "โปรแกรมขายหน้าร้าน",
    "POS ร้านอาหาร",
    "POSPOS alternative",
    "เครื่องคิดเงิน",
  ],
  openGraph: {
    title: "POS Monkey - ระบบ POS ยุคใหม่ ใช้งานง่าย",
    description: "ทดลองใช้ฟรี 14 วัน ระบบจัดการร้านที่ครบวงจรที่สุด",
    type: "website",
    locale: "th_TH",
    siteName: "POS Monkey",
  },
  alternates: {
    canonical: "https://posmonkey.cloud",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
