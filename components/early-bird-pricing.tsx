"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function EarlyBirdPricing() {
  const allFeatures = [
    "ระบบรับออเดอร์ไม่จำกัด",
    "รายงานยอดขาย Real-time",
    "เชื่อมต่อเครื่องพิมพ์ใบเสร็จ",
    "ตัดสต็อกวัตถุดิบ (BOM)",
    "ระบบสมาชิก CRM",
    "เชื่อมต่อ Delivery Apps",
  ];

  const aiFeature = "ฟีเจอร์ AI วิเคราะห์ยอดขาย";

  return (
    <section
      id="early-bird"
      className="w-full py-24 overflow-hidden bg-zinc-900 relative"
    >
      {/* Background Pattern - Plus signs */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column - Promo Content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              ลองใช้ก่อนเลย
            </h2>

            <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-md">
              ตอนนี้เรายัง Dev ไม่เสร็จ แต่อยากให้คุณลองใช้ก่อน!
              เราเปิดให้ใช้งานในราคาพิเศษสุดๆ เพื่อแลกกับ Feedback
              ที่จะช่วยให้ระบบดีขึ้น
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 px-6 bg-white hover:bg-zinc-100 text-zinc-900 font-semibold rounded-lg"
              >
                <Link href="https://posmonkey.cloud/register">
                  สมัคร Early Bird
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 px-6 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg border-0"
              >
                <Link href="#features">
                  ดูฟีเจอร์ทั้งหมด
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="p-10 lg:p-14 flex flex-col justify-center md:border-l border-zinc-700/50">
            {/* Starter Plan */}
            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl lg:text-6xl font-bold text-white">
                  ฿36
                </span>
                <span className="text-zinc-400 text-lg">/เดือน</span>
              </div>
              <p className="text-zinc-500 mb-4">ได้ทุกฟีเจอร์</p>
              <ul className="space-y-3">
                {allFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-700/50 my-6" />

            {/* Business Plan */}
            <div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl lg:text-6xl font-bold text-white">
                  ฿100
                </span>
                <span className="text-zinc-400 text-lg">/เดือน</span>
              </div>
              <p className="text-zinc-500 mb-4">ทุกอย่างใน ฿36 + AI</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zinc-300">
                  <Check className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                  ทุกฟีเจอร์ในแพ็คเกจ ฿36
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-emerald-400 font-medium">
                    {aiFeature}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
