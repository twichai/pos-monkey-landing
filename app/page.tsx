import Image from "next/image";
import Link from "next/link";
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
  ArrowRight,
  Star,
  BarChart3,
  Package,
  MonitorSmartphone,
  UtensilsCrossed,
  ShieldCheck,
  Zap,
  X,
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
        {/* 2. Hero Section: Focused & Impactful */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm font-semibold rounded-full border-primary/20 bg-primary/10 text-primary"
              >
                ✨ อัปเดตใหม่: เชื่อมต่อ LINE SHOPPING ได้แล้ววันนี้
              </Badge>

              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-linear-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                ระบบ POS ที่ <span className="text-primary italic">เข้าใจ</span>
                <br className="hidden md:inline" />
                ร้านค้าของคุณที่สุด
              </h1>

              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                หยุดเสียเวลากับระบบที่ยุ่งยาก POS Monkey ช่วยให้คุณจัดการออเดอร์
                สต็อก และลูกน้องได้ในพริบตา —{" "}
                <span className="font-semibold text-foreground">
                  เริ่มใช้งานได้ใน 3 นาที
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] mt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
                >
                  <Link href="https://posmonkey.cloud/register">
                    ทดลองใช้ฟรี 14 วัน <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50"
                >
                  <Link href="#features">ดูตัวอย่างระบบ</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/30">
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  ไม่ต้องใช้บัตรเครดิต
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/30">
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  ยกเลิกได้ทุกเมื่อ
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/30">
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  ทีมซัพพอร์ตคนไทย 24/7
                </div>
              </div>
            </div>

            {/* Hero Image Mockup */}
            <div className="mt-16 relative mx-auto max-w-5xl rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur-sm lg:rounded-2xl lg:p-4">
              <div className="aspect-[16/9] w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                {/* Replace with actual dashboard screenshot */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground flex-col gap-4">
                  <MonitorSmartphone className="h-20 w-20 opacity-20" />
                  <p className="font-medium opacity-50">
                    Modern Dashboard Interface Mockup
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent blur-2xl"></div>
            </div>
          </div>
        </section>

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
                "ขายดีขึ้น"
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

function OldHome() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Navbar: Glassmorphic & Clean */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
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
        {/* 2. Hero Section - เน้น H1 Keyword แข็งๆ */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-dot-pattern">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">
                  🏆 ระบบ POS ยอดนิยมอันดับ 1 สำหรับร้านยุคใหม่
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  ระบบ <span className="text-primary">POS</span> ที่ดีที่สุด
                  เพื่อร้านอาหารและค้าปลีกของคุณ
                </h1>
                <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  จัดการออเดอร์ สต็อก และยอดขายได้ในที่เดียว ใช้งานง่ายกว่า
                  เร็วกว่า และคุ้มค่ากว่าระบบเดิมๆ รองรับ QR Code และ Delivery
                  ครบวงจร
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="h-12 px-8">
                    <Link href="https://posmonkey.cloud/register">
                      เริ่มใช้งานฟรีทันที{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 px-8"
                  >
                    <Link href="#features">ดูฟีเจอร์ทั้งหมด</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" /> ทดลองฟรี 14 วัน
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />{" "}
                    ไม่ต้องใช้บัตรเครดิต
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" /> ยกเลิกได้ตลอดเวลา
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl border bg-background shadow-2xl overflow-hidden">
                  {/* Placeholder for Hero Image - In production use actual screenshot */}
                  <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center text-zinc-300 dark:bg-zinc-800">
                    <span className="text-lg">POS Dashboard Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Social Proof */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ไว้วางใจโดยร้านค้ากว่า{" "}
                  <span className="text-primary">10,000+</span> แห่ง
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  ระบบ POS ที่ร้านอาหาร คาเฟ่ และร้านค้าปลีกทั่วประเทศเลือกใช้
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 items-center opacity-70 mt-8">
                {/* Logos would go here */}
                <div className="flex items-center justify-center font-bold text-xl text-zinc-400">
                  ร้านกาแฟ A
                </div>
                <div className="flex items-center justify-center font-bold text-xl text-zinc-400">
                  ร้านอาหาร B
                </div>
                <div className="flex items-center justify-center font-bold text-xl text-zinc-400">
                  มินิมาร์ท C
                </div>
                <div className="flex items-center justify-center font-bold text-xl text-zinc-400">
                  บาร์ D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Features Grid - เน้น Keyword "Inventory", "Dashboard", "Online Sales" */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                Feature Highlights
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ทำไมต้องเลือก <span className="text-primary">POS Monkey</span>?
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                เราพัฒนาฟีเจอร์ที่ใช่ที่สุด โดยตัดสิ่งที่ไม่จำเป็นออก
                เพื่อให้คุณโฟกัสกับการขายได้เต็มที่
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <UtensilsCrossed className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Fast Order Taking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500">
                    รับออเดอร์รวดเร็วด้วย UI ที่ออกแบบมาเพื่อลดจำนวนการคลิก
                    พนักงานเรียนรู้ได้ใน 5 นาที
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Inventory Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500">
                    ตัดสต็อก Real-time แม่นยำ แจ้งเตือนเมื่อของใกล้หมด
                    จัดการวัตถุดิบและสูตรอาหารได้ละเอียด
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MonitorSmartphone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Multi-Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500">
                    ใช้งานได้ทุกอุปกรณ์ ไม่ว่าจะเป็น iPad, Android Tablet,
                    มือถือ หรือคอมพิวเตอร์ ไม่มีสะดุด
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Real-time Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500">
                    ดูยอดขายได้ทุกที่ทุกเวลา วิเคราะห์สินค้าขายดี ช่วงเวลาขายดี
                    เพื่อวางแผนธุรกิจได้ทันท่วงที
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Cloud Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500">
                    ข้อมูลปลอดภัยบน Cloud สูงสุด ข้อมูลไม่หายแม้อุปกรณ์พัง
                    สำรองข้อมูลอัตโนมัติทุกวัน
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>CRM & Membership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500">
                    ระบบสมาชิกและสะสมแต้มในตัว
                    ช่วยรักษาลูกค้าเก่าและเพิ่มยอดขายซ้ำได้ง่ายๆ
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Aggressive Comparison Table - แข่งกับ POSPOS และอื่นๆ */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                เทียบความคุ้มค่ากับระบบทั่วไป
              </h2>
              <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                จ่ายแพงกว่าทำไม? ในเมื่อ POS Monkey ให้คุณมากกว่า
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px] rounded-lg border bg-background shadow-sm">
                <div className="grid grid-cols-4 p-4 border-b bg-muted/50 font-medium">
                  <div className="col-span-1">ฟีเจอร์</div>
                  <div className="col-span-1 text-center text-primary font-bold text-lg">
                    POS Monkey
                  </div>
                  <div className="col-span-1 text-center text-zinc-500">
                    ระบบทั่วไป A
                  </div>
                  <div className="col-span-1 text-center text-zinc-500">
                    ระบบทั่วไป B
                  </div>
                </div>
                {/* Row 1 */}
                <div className="grid grid-cols-4 p-4 border-b hover:bg-muted/30 transition-colors">
                  <div className="col-span-1 font-medium">ราคาเริ่มต้น</div>
                  <div className="col-span-1 text-center font-bold text-green-600">
                    6xx บาท/เดือน
                  </div>
                  <div className="col-span-1 text-center text-zinc-500">
                    1,xxx บาท
                  </div>
                  <div className="col-span-1 text-center text-zinc-500">
                    9xx บาท
                  </div>
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-4 p-4 border-b hover:bg-muted/30 transition-colors">
                  <div className="col-span-1 font-medium">
                    รองรับมือถือ/Tablet
                  </div>
                  <div className="col-span-1 text-center font-bold text-green-600 flex justify-center">
                    <Check />
                  </div>
                  <div className="col-span-1 text-center text-zinc-500 flex justify-center">
                    <Check />
                  </div>
                  <div className="col-span-1 text-center text-zinc-500 flex justify-center">
                    บางรุ่น
                  </div>
                </div>
                {/* Row 3 */}
                <div className="grid grid-cols-4 p-4 border-b hover:bg-muted/30 transition-colors">
                  <div className="col-span-1 font-medium">
                    เชื่อมต่อ Delivery (Grab/LineMan)
                  </div>
                  <div className="col-span-1 text-center font-bold text-green-600 flex justify-center">
                    <Check /> ฟรี
                  </div>
                  <div className="col-span-1 text-center text-zinc-500 flex justify-center">
                    เสียเงินเพิ่ม
                  </div>
                  <div className="col-span-1 text-center text-zinc-500 flex justify-center text-red-400">
                    ไม่มี
                  </div>
                </div>
                {/* Row 4 */}
                <div className="grid grid-cols-4 p-4 hover:bg-muted/30 transition-colors">
                  <div className="col-span-1 font-medium">
                    การสนับสนุน (Support)
                  </div>
                  <div className="col-span-1 text-center font-bold text-green-600">
                    24/7 ทีมไทย
                  </div>
                  <div className="col-span-1 text-center text-zinc-500">
                    Email Only
                  </div>
                  <div className="col-span-1 text-center text-zinc-500">
                    เวลาทำการ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pricing Section (Brief) */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                แพ็คเกจราคาที่คุ้มค่าที่สุด
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Tier 1 */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>สำหรับร้านขนาดเล็กเริ่มต้น</CardDescription>
                  <div className="text-3xl font-bold mt-4">
                    ฿690
                    <span className="text-sm font-normal text-muted-foreground">
                      /เดือน
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> 1 จุดขาย
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      จัดการสต็อกเบื้องต้น
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      รายงานยอดขายรายวัน
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="https://posmonkey.cloud/register">
                      เลือกแพ็คเกจนี้
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              {/* Tier 2 (Popular) */}
              <Card className="flex flex-col border-primary shadow-lg relative">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    ขายดีที่สุด
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>สำหรับร้านที่ต้องการเติบโต</CardDescription>
                  <div className="text-3xl font-bold mt-4">
                    ฿990
                    <span className="text-sm font-normal text-muted-foreground">
                      /เดือน
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> ทุกอย่างใน
                      Starter
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> เชื่อมต่อ
                      Delivery
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      จัดการสูตรอาหาร (BOM)
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> ระบบสมาชิก
                      (CRM)
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="https://posmonkey.cloud/register">
                      เริ่มใช้งานฟรี 14 วัน
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              {/* Tier 3 */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>สำหรับธุรกิจหลายสาขา</CardDescription>
                  <div className="text-3xl font-bold mt-4">ติดต่อเรา</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      ไม่จำกัดจุดขาย
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />{" "}
                      บริหารจัดการหลายสาขา
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" /> API
                      Integration
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    ติดต่อฝ่ายขาย
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* 7. FAQ for SEO - เน้นคำถามที่คนมักค้นหา */}
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900"
        >
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              คำถามที่พบบ่อยเกี่ยวกับระบบ POS
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ระบบ POS คืออะไร และทำไมร้านค้าต้องใช้?
                </AccordionTrigger>
                <AccordionContent>
                  POS (Point of Sale) คือระบบขายหน้าร้านที่ช่วยบันทึกยอดขาย
                  ตัดสต็อกสินค้า และสรุปบัญชี ช่วยให้เจ้าของร้านลดความผิดพลาด
                  ป้องกันการทุจริต และบริหารร้านได้อย่างเป็นระบบมากขึ้น
                  เมื่อเทียบกับการใช้เครื่องคิดเลขหรือจดมือ
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  POS Monkey ต่างจาก POSPOS หรือ Wongnai POS อย่างไร?
                </AccordionTrigger>
                <AccordionContent>
                  POS Monkey ออกแบบมาให้ "ใช้งานง่ายที่สุด"
                  โดยตัดฟีเจอร์ที่ยุ่งยากออก เน้นความเร็วในการขาย
                  และราคาที่เข้าถึงได้ง่ายกว่า เริ่มต้นเพียงหลักร้อย
                  และมีทีมซัพพอร์ตคนไทยที่พร้อมดูแล 24 ชั่วโมง
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ต้องใช้อุปกรณ์อะไรบ้าง สามารถใช้ iPad ได้ไหม?
                </AccordionTrigger>
                <AccordionContent>
                  สามารถใช้อุปกรณ์ที่คุณมีอยู่ได้เลย ไม่ว่าจะเป็นคอมพิวเตอร์ PC,
                  Notebook, iPad, Tablet Android หรือแม้แต่สมาร์ทโฟน
                  เพียงแค่มีอินเทอร์เน็ตก็สามารถใช้งานผ่าน Browser ได้ทันที
                  ไม่ต้องลงโปรแกรมหนักเครื่อง
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  ถ้าอินเทอร์เน็ตหลุด ยังขายได้ไหม?
                </AccordionTrigger>
                <AccordionContent>
                  ระบบของเรามีโหมด Offline ชั่วคราว
                  ที่ช่วยให้คุณยังสามารถบันทึกออเดอร์ได้ต่อเนื่อง
                  และข้อมูลจะถูกซิงค์ขึ้น Cloud
                  ทันทีที่อินเทอร์เน็ตกลับมาใช้งานได้ปกติ
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Structured Data for FAQ */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "ระบบ POS คืออะไร และทำไมร้านค้าต้องใช้?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "POS (Point of Sale) คือระบบขายหน้าร้านที่ช่วยบันทึกยอดขาย ตัดสต็อกสินค้า และสรุปบัญชี ช่วยให้เจ้าของร้านลดความผิดพลาด ป้องกันการทุจริต และบริหารร้านได้อย่างเป็นระบบมากขึ้น",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "POS Monkey ต่างจากเจ้าอื่นอย่างไร?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "POS Monkey ออกแบบมาให้ใช้งานง่ายที่สุด ราคาประหยัดกว่า และมีทีมซัพพอร์ตดูแล 24 ชั่วโมง",
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              พร้อมยกระดับร้านของคุณหรือยัง?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl mb-8">
              ทดลองใช้ฟรี 14 วัน ไม่พอใจยินดีคืนเงิน ไม่มีข้อผูกมัด
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-primary font-bold"
            >
              <Link href="https://posmonkey.cloud/register">
                สมัครสมาชิกฟรี
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2026 POS Monkey. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline text-muted-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline text-muted-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
/*


        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
*/
