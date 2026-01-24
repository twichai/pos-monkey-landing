import Link from "next/link";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Star,
  BarChart3,
  Package,
  MonitorSmartphone,
  UtensilsCrossed,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
              href="#comparison"
            >
              เปรียบเทียบ
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
              <Link href="https://posmonkey.cloud/login">เข้าสู่ระบบ</Link>
            </Button>
            <Button
              asChild
              className="rounded-full px-6 font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Link href="https://posmonkey.cloud/register">
                เริ่มต้นใช้งานฟรี
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />

        {/* 3. Social Proof */}
        <section className="w-full py-12 bg-muted/30 border-y">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
              ไว้วางใจโดยร้านค้าชั้นนำกว่า 10,000+ แห่ง
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Logos Placeholders */}
              {[
                "Cafe Amazon",
                "After You",
                "Flash Coffee",
                "BearHouse",
                "Potato Corner",
              ].map((brand, i) => (
                <div key={i} className="flex items-center justify-center h-12">
                  <span className="text-xl font-bold text-zinc-400">
                    {brand} Model
                  </span>
                </div>
              ))}
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
                  title: "ใช้ได้ทุกอุปกรณ์",
                  desc: "ไม่บังคับซื้อเครื่องใหม่ ใช้คอมพิวเตอร์ iPad หรือ Tablet Android ที่มีอยู่ได้เลย",
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

        {/* 5. Aggressive Comparison */}
        <section
          id="comparison"
          className="w-full py-24 bg-zinc-50 dark:bg-zinc-900/50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ทำไมต้องจ่ายแพงกว่า?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                เทียบความคุ้มค่าแบบชัดๆ ระหว่าง POS Monkey กับระบบอื่นๆ ในตลาด
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white dark:bg-black rounded-2xl shadow-xl border overflow-hidden">
              <div className="grid grid-cols-3 p-6 border-b bg-muted/30">
                <div className="col-span-1 font-bold text-lg text-muted-foreground pt-4">
                  คุณสมบัติ
                </div>
                <div className="col-span-1 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    POS Monkey
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    แนะนำ
                  </Badge>
                </div>
                <div className="col-span-1 text-center pt-2">
                  <div className="text-xl font-bold text-muted-foreground">
                    ระบบทั่วไป
                  </div>
                </div>
              </div>

              {[
                {
                  name: "ราคาเริ่มต้น",
                  us: "690 บาท",
                  them: "1,200+ บาท",
                  win: true,
                },
                {
                  name: "ค่าแรกเข้า / ค่าติดตั้ง",
                  us: "0 บาท",
                  them: "3,000 - 5,000 บาท",
                  win: true,
                },
                {
                  name: "อุปกรณ์ที่รองรับ",
                  us: "ทุกอุปกรณ์ (Web-based)",
                  them: "เฉพาะเครื่องที่กำหนด",
                  win: true,
                },
                {
                  name: "เชื่อมต่อ Food Delivery",
                  us: "ฟรี (ไม่จำกัด)",
                  them: "จ่ายเพิ่ม 300/เดือน",
                  win: true,
                },
                {
                  name: "การอัปเดตฟีเจอร์",
                  us: "ฟรี ตลอดชีพ",
                  them: "เสียเงินอัปเกรด",
                  win: true,
                },
                {
                  name: "Support",
                  us: "24/7 (ทีมงานไทย)",
                  them: "ธนาคาร / Email",
                  win: true,
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 p-6 border-b hover:bg-muted/5 transition-colors items-center"
                >
                  <div className="col-span-1 font-medium text-muted-foreground">
                    {row.name}
                  </div>
                  <div className="col-span-1 text-center font-bold text-lg flex items-center justify-center gap-2">
                    {row.win && <Check className="h-5 w-5 text-green-500" />}{" "}
                    {row.us}
                  </div>
                  <div className="col-span-1 text-center text-muted-foreground flex items-center justify-center gap-2">
                    {row.them}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pricing Section */}
        <section id="pricing" className="w-full py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ราคาที่โปร่งใส ไม่มีค่าใช้จ่ายแฝง
              </h2>
              <p className="text-muted-foreground mt-4">
                เลือกแพ็คเกจที่เหมาะกับขนาดร้านของคุณ เปลี่ยนแพ็คเกจได้ตลอดเวลา
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <Card className="flex flex-col border shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>
                    สำหรับร้านกาแฟ/ร้านอาหารขนาดเล็ก
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">฿690</span>
                    <span className="text-muted-foreground">/เดือน</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" /> 1 จุดขาย
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      รายการสินค้าไม่จำกัด
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      รายงานยอดขายพื้นฐาน
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="https://posmonkey.cloud/register?plan=starter">
                      เลือก Starter
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan (Highlighted) */}
              <Card className="flex flex-col border-2 border-primary shadow-2xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    ขายดีที่สุด 🚀
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Business
                  </CardTitle>
                  <CardDescription>
                    สำหรับร้านที่ต้องการระบบครบวงจร
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">฿990</span>
                    <span className="text-muted-foreground">/เดือน</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> ทุกอย่างใน
                      Starter
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      ตัดสต็อกวัตถุดิบ (BOM)
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> ระบบสมาชิก
                      (CRM)
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> เชื่อมต่อ
                      Grab/Lineman/Shopee
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> Export
                      ข้อมูล Excel
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full h-12 text-base font-bold shadow-lg"
                    asChild
                  >
                    <Link href="https://posmonkey.cloud/register?plan=business">
                      ทดลองใช้ฟรี 14 วัน
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col border shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>
                    สำหรับธุรกิจแฟรนไชส์ / หลายสาขา
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">ติดต่อเรา</span>
                    <span className="text-muted-foreground"></span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      ไม่จำกัดจุดขาย
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      ระบบบริหารจัดการสาขา (HQ)
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" /> API
                      Integration
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      ผู้ดูแลส่วนตัว (Account Manager)
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="mailto:sales@posmonkey.cloud">
                      ติดต่อฝ่ายขาย
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

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
                <Link href="https://posmonkey.cloud/register">
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
              href="#"
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
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
