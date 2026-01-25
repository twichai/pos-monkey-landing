import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POS Monkey | ระบบ POS ฟรี ราคาถูก สำหรับร้านอาหารและค้าปลีก",
  description:
    "ระบบ POS ราคาถูกที่สุด เริ่ม 36 บาท/เดือน ทดลองฟรี 14 วัน ใช้งานง่าย ตัดสต็อกอัตโนมัติ",
  keywords: [
    "POS ฟรี",
    "POS ราคาถูก",
    "ระบบ POS ฟรี",
    "ระบบ POS ราคาถูก",
    "POS ร้านอาหาร ราคาถูก",
    "POS ร้านกาแฟ ฟรี",
    "โปรแกรมขายหน้าร้าน ฟรี",
    "โปรแกรมคิดเงิน ราคาถูก",
    "POS",
    "ระบบ POS",
    "โปรแกรมขายหน้าร้าน",
    "POS ร้านอาหาร",
    "POS ร้านค้าปลีก",
    "POS คาเฟ่",
    "ระบบจัดการร้านอาหาร",
    "เครื่องคิดเงิน",
    "ตัดสต็อก",
    "ระบบสมาชิกร้านอาหาร",
    "POS ออนไลน์",
    "Cloud POS",
    "POS ไม่ต้องซื้อเครื่อง",
  ],
  openGraph: {
    title: "POS Monkey - ระบบ POS ฟรี ราคาถูกที่สุด เริ่ม 36 บาท/เดือน",
    description: "ทดลองใช้ฟรี 14 วัน ระบบ POS ราคาถูกที่สุด ครบวงจร ใช้งานง่าย",
    type: "website",
    locale: "th_TH",
    siteName: "POS Monkey",
    url: "https://posmonkey.cloud",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Monkey - ระบบ POS ฟรี ราคาถูก เริ่ม 36 บาท/เดือน",
    description:
      "ระบบ POS ราคาถูกที่สุด ทดลองใช้ฟรี 14 วัน ครบวงจร ใช้งานง่าย รองรับทุกอุปกรณ์",
  },
  alternates: {
    canonical: "https://posmonkey.cloud",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Schema Markup
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://posmonkey.cloud/#organization",
      name: "POS Monkey",
      url: "https://posmonkey.cloud",
      logo: "https://posmonkey.cloud/logo.png",
      description: "ระบบ POS ที่ดีที่สุดสำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "sales@posmonkey.cloud",
        availableLanguage: ["Thai", "English"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://posmonkey.cloud/#website",
      url: "https://posmonkey.cloud",
      name: "POS Monkey",
      description: "ระบบ POS ร้านอาหารและค้าปลีก อันดับ 1 ที่คุณวางใจ",
      publisher: {
        "@id": "https://posmonkey.cloud/#organization",
      },
      inLanguage: "th-TH",
    },
    {
      "@type": "SoftwareApplication",
      name: "POS Monkey",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser, iOS, Android",
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "5xx",
          priceCurrency: "THB",
          priceValidUntil: "2026-12-31",
          description: "สำหรับร้านกาแฟ/ร้านอาหารขนาดเล็ก",
        },
        {
          "@type": "Offer",
          name: "Business",
          price: "9xx",
          priceCurrency: "THB",
          priceValidUntil: "2026-12-31",
          description: "สำหรับร้านที่ต้องการระบบครบวงจร",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "150",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ระบบ POS Monkey ต้องเสียค่าติดตั้งไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ไม่เสียค่าติดตั้งครับ คุณสามารถสมัครสมาชิกและเริ่มใช้งานได้ทันที ระบบของเราเป็น Cloud-based 100% ไม่ต้องลงโปรแกรมให้ยุ่งยาก เพียงแค่มีอินเทอร์เน็ตก็ใช้งานได้เลย",
          },
        },
        {
          "@type": "Question",
          name: "ย้ายข้อมูลจากระบบเก่ามาได้ไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ได้ครับ เรามีระบบ Import ข้อมูลสินค้าผ่าน Excel ทำให้คุณไม่ต้องมานั่งกรอกข้อมูลทีละรายการ ย้ายค่ายมาใช้ POS Monkey ได้ง่ายนิดเดียว",
          },
        },
        {
          "@type": "Question",
          name: "ถ้าอินเทอร์เน็ตล่ม จะยังใช้งานได้ไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ใช้งานได้ต่อเนื่องครับ ระบบจะมี Offline Mode ให้คุณรับออเดอร์และคิดเงินได้ปกติ และเมื่ออินเทอร์เน็ตกลับมา ข้อมูลจะถูก Sync ขึ้น Cloud โดยอัตโนมัติ",
          },
        },
        {
          "@type": "Question",
          name: "POS Monkey ราคาเท่าไหร่? มีแพ็คเกจฟรีไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "เรามีราคา Early Bird สุดพิเศษเริ่มต้นเพียง 36 บาท/เดือน ได้ทุกฟีเจอร์ครบ และสามารถทดลองใช้ฟรี 14 วันก่อนตัดสินใจ ไม่ต้องผูกบัตรเครดิต ยกเลิกได้ทุกเมื่อ",
          },
        },
        {
          "@type": "Question",
          name: "ต้องซื้อเครื่อง POS หรืออุปกรณ์พิเศษไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ไม่ต้องซื้อเครื่องใหม่ครับ POS Monkey ใช้งานผ่าน Web Browser ได้เลย สามารถใช้กับคอมพิวเตอร์ แท็บเล็ต iPad หรือมือถือที่มีอยู่ ประหยัดค่าใช้จ่ายได้เยอะมาก",
          },
        },
        {
          "@type": "Question",
          name: "เชื่อมต่อกับ Grab, LINE MAN, Shopee Food ได้ไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ฟีเจอร์เชื่อมต่อ Delivery Apps กำลังอยู่ในระหว่างพัฒนาครับ เราวางแผนจะเปิดให้ใช้งานเร็วๆ นี้ สมัคร Early Bird ตอนนี้จะได้ใช้ฟีเจอร์นี้ฟรีเมื่อเปิดตัว!",
          },
        },
        {
          "@type": "Question",
          name: "ระบบตัดสต็อกวัตถุดิบ (BOM) ทำงานยังไง?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ฟีเจอร์ตัดสต็อกวัตถุดิบ (BOM) กำลังอยู่ในระหว่างพัฒนาครับ เมื่อพร้อมแล้วคุณจะสามารถตั้งสูตรอาหาร (Recipe) ได้ว่าเมนูนี้ใช้วัตถุดิบอะไรบ้าง และระบบจะตัดสต็อกให้อัตโนมัติเมื่อขาย",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
