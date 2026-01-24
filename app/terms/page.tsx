import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | POS Monkey",
  description:
    "ข้อกำหนดและเงื่อนไขการใช้บริการ POS Monkey - ระบบ POS ร้านอาหารและค้าปลีก",
  alternates: {
    canonical: "https://posmonkey.cloud/terms",
  },
};

export default function TermsPage() {
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
          ข้อกำหนดและเงื่อนไขการใช้บริการ (Terms of Service)
        </h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            ปรับปรุงล่าสุด: 24 มกราคม 2569
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. การยอมรับข้อกำหนด
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              การใช้บริการ POS Monkey
              ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารนี้
              หากคุณไม่ยอมรับข้อกำหนดเหล่านี้ กรุณาหยุดใช้บริการของเรา
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. บริการของเรา</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              POS Monkey ให้บริการระบบ Point of Sale (POS) บนระบบ Cloud
              ซึ่งประกอบด้วย:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>ระบบรับออเดอร์และคิดเงิน</li>
              <li>ระบบจัดการสต็อกและวัตถุดิบ</li>
              <li>ระบบรายงานและวิเคราะห์ยอดขาย</li>
              <li>ระบบสมาชิกและ CRM</li>
              <li>การเชื่อมต่อกับ Delivery Apps</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. บัญชีผู้ใช้</h2>
            <p className="text-muted-foreground leading-relaxed">
              คุณมีหน้าที่รักษาความปลอดภัยของบัญชีและรหัสผ่าน
              คุณรับผิดชอบต่อกิจกรรมทั้งหมดที่เกิดขึ้นภายใต้บัญชีของคุณ
              กรุณาแจ้งเราทันทีหากพบการใช้งานที่ไม่ได้รับอนุญาต
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. การชำระเงินและสมัครสมาชิก
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              เงื่อนไขการชำระเงิน:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>ค่าบริการเรียกเก็บเป็นรายเดือนหรือรายปี</li>
              <li>ทดลองใช้งานฟรี 14 วัน ไม่ต้องผูกบัตรเครดิต</li>
              <li>สามารถยกเลิกการสมัครได้ทุกเมื่อ</li>
              <li>การคืนเงินเป็นไปตามเงื่อนไขที่กำหนด</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. การใช้งานที่ยอมรับได้
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              คุณตกลงที่จะไม่:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>ใช้บริการเพื่อกิจกรรมที่ผิดกฎหมาย</li>
              <li>พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต</li>
              <li>แชร์บัญชีกับผู้อื่นที่ไม่ได้รับอนุญาต</li>
              <li>ใช้บริการในทางที่อาจทำให้ระบบเสียหาย</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. ทรัพย์สินทางปัญญา
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              เนื้อหา, โลโก้, และซอฟต์แวร์ทั้งหมดบน POS Monkey เป็นทรัพย์สินของ
              POS Monkey Co., Ltd.
              และได้รับการคุ้มครองตามกฎหมายทรัพย์สินทางปัญญา
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. ความรับผิดชอบที่จำกัด
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              POS Monkey ให้บริการ &quot;ตามสภาพที่เป็นอยู่&quot; และ
              &quot;ตามที่มีอยู่&quot;
              เราไม่รับประกันว่าบริการจะไม่มีข้อผิดพลาดหรือไม่หยุดชะงัก
              ความรับผิดสูงสุดของเราจำกัดอยู่ที่จำนวนเงินที่คุณชำระให้เราในช่วง
              12 เดือนที่ผ่านมา
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. การยุติบริการ</h2>
            <p className="text-muted-foreground leading-relaxed">
              เราขอสงวนสิทธิ์ในการระงับหรือยุติบัญชีของคุณหากพบการละเมิดข้อกำหนดเหล่านี้
              คุณสามารถยกเลิกบัญชีได้ทุกเมื่อผ่านการตั้งค่าในระบบ
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. การเปลี่ยนแปลงข้อกำหนด
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              เราอาจปรับปรุงข้อกำหนดเหล่านี้เป็นครั้งคราว
              การเปลี่ยนแปลงจะมีผลบังคับใช้เมื่อเราประกาศบนเว็บไซต์
              การใช้บริการต่อหลังจากการเปลี่ยนแปลงถือว่าคุณยอมรับข้อกำหนดใหม่
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. ติดต่อเรา</h2>
            <p className="text-muted-foreground leading-relaxed">
              หากมีคำถามเกี่ยวกับข้อกำหนดและเงื่อนไข กรุณาติดต่อ:{" "}
              <a
                href="mailto:legal@posmonkey.cloud"
                className="text-primary hover:underline"
              >
                legal@posmonkey.cloud
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
