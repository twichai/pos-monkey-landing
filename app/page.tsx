import Link from "next/link";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { EarlyBirdPricing } from "@/components/early-bird-pricing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  BarChart3,
  Package,
  MonitorSmartphone,
  UtensilsCrossed,
  ShieldCheck,
  Zap,
} from "lucide-react";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://admin.posmonkey.cloud";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-white dark:bg-black selection:bg-primary/20">
      {/* 1. Navbar: Glassmorphic & Clean */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden md:inline-block">
              POS Monkey
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#features"
            >
              คุณสมบัติ
            </Link>
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#early-bird"
            >
              โปรโมชั่น
            </Link>
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#pricing"
            >
              ราคา
            </Link>
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#faq"
            >
              คำถาม
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="hidden sm:inline-flex hover:bg-muted font-medium"
            >
              <Link href={`${APP_URL}/login`}>เข้าสู่ระบบ</Link>
            </Button>
            <Button
              asChild
              className="rounded-full px-6 font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Link href={`${APP_URL}/register`}>เริ่มต้นใช้งานฟรี</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />

        {/* 3. Stats / Social Proof */}
        <section className="w-full py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16">
              ผลลัพธ์จากร้านค้าที่ใช้งานจริง
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
              {/* Stat 1 */}
              <div>
                <p className="text-muted-foreground mb-4">
                  ลดเวลารับออเดอร์ได้ถึง
                </p>
                <p className="text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                  3x
                </p>
                <p className="text-muted-foreground">เร็วขึ้น</p>
              </div>

              {/* Stat 2 */}
              <div>
                <p className="text-muted-foreground mb-4">
                  ร้านค้าพบว่ายอดขายเพิ่มขึ้น
                </p>
                <p className="text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                  30%
                </p>
                <p className="text-muted-foreground">จากระบบสมาชิก</p>
              </div>

              {/* Stat 3 */}
              <div>
                <p className="text-muted-foreground mb-4">
                  เริ่มใช้งานได้ภายใน
                </p>
                <p className="text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                  5
                </p>
                <p className="text-muted-foreground">นาที</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Features Grid */}
        <section id="features" className="w-full py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                ทุกฟีเจอร์ที่ร้านอาหารและค้าปลีกต้องการ
              </h2>
              <p className="text-xl text-muted-foreground">
                เราตัดความซับซ้อนทิ้ง เหลือไว้แต่เครื่องมือที่ช่วยให้คุณ
                &quot;ขายดีขึ้น&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: UtensilsCrossed,
                  title: "รับออเดอร์ไวใน 3 คลิก",
                  desc: "หน้าจอแคชเชียร์ออกแบบใหม่ ลดขั้นตอนที่ไม่จำเป็น พนักงานใหม่เป็นงานได้ทันที ไม่ต้องสอนเยอะ",
                },
                {
                  icon: Package,
                  title: "สต็อกแม่นยำ Real-time",
                  desc: "ตัดสต็อกทันทีที่ขาย ผูกสูตรอาหาร (BOM) ได้ละเอียด แจ้งเตือนเมื่อของใกล้หมดก่อนจะสาย",
                },
                {
                  icon: BarChart3,
                  title: "รู้ยอดขายได้ทุกที่",
                  desc: "Dashboard สรุปยอดขาย กำไร ต้นทุน ดูได้ผ่านมือถือเจ้าของร้านแบบ Real-time แม้ไม่อยู่ร้าน",
                },
                {
                  icon: MonitorSmartphone,
                  title: "ใช้ได้ทั้ง Web & Android",
                  desc: "ไม่บังคับซื้อเครื่องใหม่ ใช้ผ่าน Web Browser หรือแอป Android ที่มีอยู่ได้เลย (รองรับ iOS เร็วๆ นี้)",
                },
                {
                  icon: ShieldCheck,
                  title: "ข้อมูลไม่มีหาย",
                  desc: "ระบบ Cloud มาตรฐานโลก ข้อมูลปลอดภัย 100% แม้คอมพังหรือแท็บเล็ตหาย ข้อมูลก็ยังอยู่",
                },
                {
                  icon: Star,
                  title: "CRM มัดใจลูกค้า",
                  desc: "ระบบสมาชิก สะสมแต้ม แลกของรางวัล ช่วยให้ลูกค้ากลับมาซื้อซ้ำ เพิ่มยอดขายได้อีก 30%",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="group border-none shadow-md hover:shadow-xl transition-all duration-300 bg-muted/20 hover:bg-white dark:hover:bg-zinc-900"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Early Bird Pricing */}
        <EarlyBirdPricing />

        {/* 6. Pricing Section */}
        <Pricing />

        {/* 7. FAQ Section */}
        <section id="faq" className="w-full py-24 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow-sm px-6 py-2"
            >
              <AccordionItem value="item-1" className="border-b-0 mb-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  ระบบ POS Monkey ต้องเสียค่าติดตั้งไหม?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ไม่เสียค่าติดตั้งครับ
                  คุณสามารถสมัครสมาชิกและเริ่มใช้งานได้ทันที ระบบของเราเป็น
                  Cloud-based 100% ไม่ต้องลงโปรแกรมให้ยุ่งยาก
                  เพียงแค่มีอินเทอร์เน็ตก็ใช้งานได้เลย
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-0 mb-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  ย้ายข้อมูลจากระบบเก่ามาได้ไหม?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ได้ครับ เรามีระบบ Import ข้อมูลสินค้าผ่าน Excel
                  ทำให้คุณไม่ต้องมานั่งกรอกข้อมูลทีละรายการ ย้ายค่ายมาใช้ POS
                  Monkey ได้ง่ายนิดเดียว
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-0 mb-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  ถ้าอินเทอร์เน็ตล่ม จะยังใช้งานได้ไหม?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ใช้งานได้ต่อเนื่องครับ ระบบจะมี Offline Mode
                  ให้คุณรับออเดอร์และคิดเงินได้ปกติ และเมื่ออินเทอร์เน็ตกลับมา
                  ข้อมูลจะถูก Sync ขึ้น Cloud โดยอัตโนมัติ
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b-0 mb-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  POS Monkey ราคาเท่าไหร่? มีแพ็คเกจฟรีไหม?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  เรามีราคา Early Bird สุดพิเศษเริ่มต้นเพียง 36 บาท/เดือน
                  ได้ทุกฟีเจอร์ครบ และสามารถทดลองใช้ฟรี 14 วันก่อนตัดสินใจ
                  ไม่ต้องผูกบัตรเครดิต ยกเลิกได้ทุกเมื่อ
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b-0 mb-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  ต้องซื้อเครื่อง POS หรืออุปกรณ์พิเศษไหม?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ไม่ต้องซื้อเครื่องใหม่ครับ POS Monkey ใช้งานผ่าน Web Browser
                  ได้เลย สามารถใช้กับคอมพิวเตอร์ แท็บเล็ต iPad
                  หรือมือถือที่มีอยู่ ประหยัดค่าใช้จ่ายได้เยอะมาก
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b-0 mb-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  เชื่อมต่อกับ Grab, LINE MAN, Shopee Food ได้ไหม?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 text-xs px-2 py-1 rounded-full mb-2">
                    กำลังพัฒนา
                  </span>
                  <br />
                  ฟีเจอร์เชื่อมต่อ Delivery Apps กำลังอยู่ในระหว่างพัฒนาครับ
                  เราวางแผนจะเปิดให้ใช้งานเร็วๆ นี้ สมัคร Early Bird ตอนนี้
                  จะได้ใช้ฟีเจอร์นี้ฟรีเมื่อเปิดตัว!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b-0 mb-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  ระบบตัดสต็อกวัตถุดิบ (BOM) ทำงานยังไง?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 text-xs px-2 py-1 rounded-full mb-2">
                    กำลังพัฒนา
                  </span>
                  <br />
                  ฟีเจอร์ตัดสต็อกวัตถุดิบ (BOM) กำลังอยู่ในระหว่างพัฒนาครับ
                  เมื่อพร้อมแล้วคุณจะสามารถตั้งสูตรอาหาร (Recipe)
                  ได้ว่าเมนูนี้ใช้วัตถุดิบอะไรบ้าง
                  และระบบจะตัดสต็อกให้อัตโนมัติเมื่อขาย
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 8. Call to Action (Footer) */}
        <section className="w-full py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6 text-white">
              อย่าปล่อยให้ระบบเก่าๆ ถ่วงความเจริญร้านคุณ
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              เปลี่ยนมาใช้ POS Monkey วันนี้ ชีวิตง่ายขึ้น ยอดขายเพิ่มขึ้น
              จัดการร้านได้เหมือนมืออาชีพ
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-14 px-10 text-lg font-bold shadow-2xl hover:bg-white text-primary"
              >
                <Link href={`${APP_URL}/register`}>
                  สมัครใช้งานฟรีทันที (ไม่ต้องรอ)
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              *ทดลองใช้ฟรี 14 วัน เต็มฟีเจอร์ ไม่ต้องผูกบัตรเครดิต
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 border-t bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-bold">POS Monkey</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 POS Monkey Co., Ltd. ระบบ POS อันดับ 1 ของไทย
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="mailto:support@posmonkey.cloud"
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
