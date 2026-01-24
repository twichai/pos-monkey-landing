import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | POS Monkey",
  description:
    "นโยบายความเป็นส่วนตัวของ POS Monkey - การเก็บรักษาข้อมูลและความปลอดภัย",
  alternates: {
    canonical: "https://posmonkey.cloud/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            กลับหน้าหลัก
          </Link>
        </Button>

        <h1 className="text-4xl font-bold tracking-tight mb-8">
          นโยบายความเป็นส่วนตัว (Privacy Policy)
        </h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            ปรับปรุงล่าสุด: 24 มกราคม 2569
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. ข้อมูลที่เราเก็บรวบรวม
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              POS Monkey เก็บรวบรวมข้อมูลเพื่อให้บริการที่ดีที่สุดแก่ผู้ใช้งาน
              ข้อมูลที่เราเก็บรวบรวมได้แก่:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>ข้อมูลส่วนบุคคล: ชื่อ, อีเมล, เบอร์โทรศัพท์</li>
              <li>ข้อมูลธุรกิจ: ชื่อร้าน, ที่อยู่, ประเภทธุรกิจ</li>
              <li>ข้อมูลการใช้งาน: ประวัติการขาย, สินค้า, สต็อก</li>
              <li>ข้อมูลการชำระเงิน: ข้อมูลการสมัครสมาชิก</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. การใช้ข้อมูล</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              เราใช้ข้อมูลที่เก็บรวบรวมเพื่อ:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>ให้บริการระบบ POS และฟีเจอร์ต่างๆ</li>
              <li>ปรับปรุงและพัฒนาบริการของเรา</li>
              <li>ติดต่อสื่อสารเกี่ยวกับบริการและโปรโมชัน</li>
              <li>รักษาความปลอดภัยของบัญชีผู้ใช้</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. การรักษาความปลอดภัยข้อมูล
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              เราใช้มาตรการรักษาความปลอดภัยระดับสูงในการปกป้องข้อมูลของคุณ
              รวมถึงการเข้ารหัส SSL, การจัดเก็บข้อมูลบน Cloud ที่ได้มาตรฐาน
              และการ Backup ข้อมูลอัตโนมัติ
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. การแชร์ข้อมูล</h2>
            <p className="text-muted-foreground leading-relaxed">
              เราจะไม่ขาย ให้เช่า หรือแชร์ข้อมูลส่วนบุคคลของคุณกับบุคคลที่สาม
              ยกเว้นกรณีที่จำเป็นเพื่อการให้บริการ หรือตามที่กฎหมายกำหนด
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. สิทธิ์ของผู้ใช้งาน
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              คุณมีสิทธิ์ในการ:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>เข้าถึงและขอสำเนาข้อมูลของคุณ</li>
              <li>แก้ไขข้อมูลที่ไม่ถูกต้อง</li>
              <li>ขอลบข้อมูลของคุณ</li>
              <li>ยกเลิกการรับข่าวสารและโปรโมชัน</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. ติดต่อเรา</h2>
            <p className="text-muted-foreground leading-relaxed">
              หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อ:{" "}
              <a
                href="mailto:privacy@posmonkey.cloud"
                className="text-primary hover:underline"
              >
                privacy@posmonkey.cloud
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
