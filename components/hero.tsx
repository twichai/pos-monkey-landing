"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://admin.posmonkey.cloud";

export const Hero = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          {/* <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-semibold rounded-full border-primary/20 bg-primary/10 text-primary"
            >
              ✨ อัปเดตใหม่: เชื่อมต่อ LINE SHOPPING ได้แล้ววันนี้
            </Badge>
          </motion.div> */}

          {/* H1 Title */}
          <motion.h1
            className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 max-w-4xl leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            ระบบ POS <span className="text-primary">ฟรี</span> สำหรับร้านอาหาร
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/80">
              เริ่มต้นแค่ 36บาท/เดือน • ราคาถูกที่สุด
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            หยุดเสียเวลากับระบบที่ยุ่งยาก POS Monkey ช่วยให้คุณจัดการออเดอร์
            สต็อก และลูกน้องได้ในพริบตา —{" "}
            <span className="font-semibold text-foreground">
              เริ่มใช้งานได้ใน 3 นาที
            </span>
          </motion.p>

          {/* Action Buttons (Input/Button style from Hero 204 adapted for POS) */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md items-center justify-center mt-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {/* 
                           Hero 204 generally uses an input field + button.
                           For a POS, "Get Started" is usually a direct link, but if we want the "look",
                           we can simulate an input or just keep the strong buttons.
                           User asked to "look like this", so I will use the button styles that look big and bold.
                        */}
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <Link href={`${APP_URL}/register`}>
                ทดลองใช้ฟรี 14 วัน <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-lg rounded-full border-2 w-full sm:w-auto"
            >
              <Link href="#features">ดูตัวอย่างระบบ</Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-muted-foreground"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ไม่ต้องใช้บัตรเครดิต
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ยกเลิกได้ทุกเมื่อ
            </div>
          </motion.div>
        </div>

        {/* Hero 204 Image Mockup: Two Phones / Devices Staggered */}
        <motion.div
          className="relative mt-20 mx-auto max-w-5xl h-[400px] md:h-[600px] perspective-1000"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Device 1: Tablet/Desktop (Behind) */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[90%] md:w-[800px] h-[300px] md:h-[500px] bg-zinc-900 rounded-[20px] border-[8px] border-zinc-800 shadow-2xl overflow-hidden z-10"
            initial={{ y: 50, rotateX: 10 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Screen Content Placeholder */}
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
              {/* Mock UI Elements */}
              <div className="absolute top-4 left-4 right-4 h-8 bg-zinc-700/50 rounded flex items-center px-2 gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-8 pt-16 w-full h-full">
                <div className="col-span-2 bg-zinc-700/30 rounded-xl h-full animate-pulse"></div>
                <div className="col-span-1 bg-zinc-700/30 rounded-xl h-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Device 2: Mobile Phone (Floating Front Right) */}
          <motion.div
            className="absolute right-[5%] md:right-[10%] top-[40px] md:top-[120px] w-[140px] md:w-[220px] h-[280px] md:h-[450px] bg-black rounded-[30px] border-[8px] border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
            initial={{ y: 100, x: 20 }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 1.2, type: "spring", delay: 0.2 }}
          >
            <div className="w-full h-full bg-zinc-900 rounded-[22px] overflow-hidden relative">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-b-xl z-30"></div>

              {/* Mobile UI Mockup */}
              <div className="flex flex-col p-4 pt-10 gap-3 h-full">
                <div className="h-20 bg-primary/20 rounded-xl w-full"></div>
                <div className="h-10 bg-zinc-800 rounded-lg w-full"></div>
                <div className="h-10 bg-zinc-800 rounded-lg w-full"></div>
                <div className="flex-1 bg-zinc-800/50 rounded-lg w-full"></div>
                <div className="h-14 bg-primary rounded-full w-full mt-auto shadow-lg shadow-primary/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    Checkout ฿150.00
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};
