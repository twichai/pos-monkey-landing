"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Check, Minus, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Define plan types
type PlanKey = "starter" | "business" | "enterprise";

interface Feature {
  name: string;
  starter: boolean | string;
  business: boolean | string;
  enterprise: boolean | string;
}

interface FeatureSection {
  name: string;
  features: Feature[];
}

// Pricing plans data
const plans = [
  {
    id: "starter" as PlanKey,
    name: "Starter",
    description: "สำหรับร้านกาแฟ/ร้านอาหารขนาดเล็ก",
    price: "฿5xx",
    period: "/เดือน",
    buttonText: "เลือก Starter",
    buttonVariant: "outline" as const,
    href: "https://posmonkey.cloud/register?plan=starter",
    popular: false,
  },
  {
    id: "business" as PlanKey,
    name: "Business",
    description: "สำหรับร้านที่ต้องการระบบครบวงจร",
    price: "฿9xx",
    period: "/เดือน",
    buttonText: "ทดลองใช้ฟรี 14 วัน",
    buttonVariant: "default" as const,
    href: "https://posmonkey.cloud/register?plan=business",
    popular: true,
  },
  {
    id: "enterprise" as PlanKey,
    name: "Enterprise",
    description: "สำหรับธุรกิจแฟรนไชส์ / หลายสาขา",
    price: "ติดต่อเรา",
    period: "",
    buttonText: "ติดต่อฝ่ายขาย",
    buttonVariant: "outline" as const,
    href: "mailto:sales@posmonkey.cloud",
    popular: false,
  },
];

// Features comparison data
const featureSections: FeatureSection[] = [
  {
    name: "การใช้งานพื้นฐาน",
    features: [
      {
        name: "จำนวนจุดขาย",
        starter: "1 จุด",
        business: "3 จุด",
        enterprise: "ไม่จำกัด",
      },
      {
        name: "รายการสินค้า",
        starter: "ไม่จำกัด",
        business: "ไม่จำกัด",
        enterprise: "ไม่จำกัด",
      },
      {
        name: "จำนวนพนักงาน",
        starter: "3 คน",
        business: "10 คน",
        enterprise: "ไม่จำกัด",
      },
      {
        name: "ประวัติการขาย",
        starter: "90 วัน",
        business: "1 ปี",
        enterprise: "ไม่จำกัด",
      },
    ],
  },
  {
    name: "ฟีเจอร์หลัก",
    features: [
      {
        name: "ระบบรับออเดอร์",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "รายงานยอดขายพื้นฐาน",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "ตัดสต็อกวัตถุดิบ (BOM)",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "ระบบสมาชิก (CRM)",
        starter: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Export ข้อมูล Excel",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Dashboard วิเคราะห์ขั้นสูง",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "บริหารจัดการหลายสาขา (HQ)",
        starter: false,
        business: true,
        enterprise: true,
      },
      {
        name: "API Integration",
        starter: false,
        business: false,
        enterprise: true,
      },
    ],
  },
  {
    name: "การเชื่อมต่อ",
    features: [
      {
        name: "เครื่องพิมพ์ใบเสร็จ",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "ลิ้นชักเก็บเงิน",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Grab / Lineman / Shopee",
        starter: false,
        business: true,
        enterprise: true,
      },
      {
        name: "LINE SHOPPING",
        starter: false,
        business: true,
        enterprise: true,
      },
      { name: "QR PromptPay", starter: true, business: true, enterprise: true },
      { name: "เครื่อง EDC", starter: false, business: true, enterprise: true },
    ],
  },
  {
    name: "การสนับสนุน",
    features: [
      {
        name: "ศูนย์ช่วยเหลือออนไลน์",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "แชทสด (เวลาทำการ)",
        starter: true,
        business: true,
        enterprise: true,
      },
      { name: "แชทสด 24/7", starter: false, business: true, enterprise: true },
      {
        name: "โทรศัพท์ Priority",
        starter: false,
        business: false,
        enterprise: true,
      },
      {
        name: "ผู้ดูแลส่วนตัว (Account Manager)",
        starter: false,
        business: false,
        enterprise: true,
      },
      {
        name: "การฝึกอบรมทีมงาน",
        starter: false,
        business: false,
        enterprise: true,
      },
    ],
  },
];

// Feature value renderer
const FeatureValue = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return <span className="text-sm font-medium">{value}</span>;
  }
  if (value) {
    return <Check className="h-5 w-5 text-primary mx-auto" />;
  }
  return <Minus className="h-5 w-5 text-muted-foreground/40 mx-auto" />;
};

export function Pricing() {
  const [openSections, setOpenSections] = useState<string[]>(
    featureSections.map((s) => s.name),
  );

  const toggleSection = (name: string) => {
    setOpenSections((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  };

  return (
    <section id="pricing" className="w-full py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            ราคาที่โปร่งใส ไม่มีค่าใช้จ่ายแฝง
          </h2>
          <p className="text-xl text-muted-foreground">
            เลือกแพ็คเกจที่เหมาะกับขนาดร้านของคุณ เปลี่ยนแพ็คเกจได้ตลอดเวลา
          </p>
        </div>

        {/* Pricing Table */}
        <div className="max-w-5xl mx-auto">
          {/* Plan Headers - Desktop */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 mb-8">
            <div className="col-span-1" /> {/* Empty cell for feature names */}
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "rounded-2xl p-6 text-center transition-all",
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-2xl scale-105 relative z-10"
                    : "bg-muted/50",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      ขายดีที่สุด 🚀
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p
                  className={cn(
                    "text-sm mb-4",
                    plan.popular
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground",
                  )}
                >
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.popular
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground",
                    )}
                  >
                    {plan.period}
                  </span>
                </div>
                <Button
                  asChild
                  variant={plan.popular ? "secondary" : plan.buttonVariant}
                  className={cn(
                    "w-full",
                    plan.popular && "font-bold shadow-lg",
                  )}
                >
                  <Link href={plan.href}>{plan.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Plan Headers - Mobile */}
          <div className="md:hidden space-y-4 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "rounded-2xl p-6 transition-all",
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-2xl relative"
                    : "bg-muted/50",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                      ขายดีที่สุด 🚀
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <p
                      className={cn(
                        "text-sm",
                        plan.popular
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground",
                      )}
                    >
                      {plan.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <span
                      className={cn(
                        "text-sm block",
                        plan.popular
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground",
                      )}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  variant={plan.popular ? "secondary" : plan.buttonVariant}
                  className={cn("w-full", plan.popular && "font-bold")}
                >
                  <Link href={plan.href}>{plan.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="rounded-2xl border bg-background overflow-hidden">
            {featureSections.map((section, sectionIndex) => (
              <Collapsible
                key={section.name}
                open={openSections.includes(section.name)}
                onOpenChange={() => toggleSection(section.name)}
              >
                <CollapsibleTrigger className="w-full">
                  <div
                    className={cn(
                      "flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors",
                      sectionIndex > 0 && "border-t",
                    )}
                  >
                    <h4 className="font-semibold text-lg">{section.name}</h4>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform",
                        openSections.includes(section.name) && "rotate-180",
                      )}
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border-t">
                    {section.features.map((feature, featureIndex) => (
                      <div
                        key={feature.name}
                        className={cn(
                          "grid grid-cols-1 md:grid-cols-4 gap-4 px-6 py-4 items-center",
                          featureIndex > 0 && "border-t border-dashed",
                          "hover:bg-muted/30 transition-colors",
                        )}
                      >
                        {/* Feature Name */}
                        <div className="font-medium text-sm md:col-span-1">
                          {feature.name}
                        </div>

                        {/* Desktop: Show all plans in row */}
                        <div className="hidden md:contents">
                          {(
                            ["starter", "business", "enterprise"] as PlanKey[]
                          ).map((planId) => (
                            <div key={planId} className="text-center">
                              <FeatureValue value={feature[planId]} />
                            </div>
                          ))}
                        </div>

                        {/* Mobile: Show plans in grid */}
                        <div className="md:hidden grid grid-cols-3 gap-2 mt-2">
                          {(
                            ["starter", "business", "enterprise"] as PlanKey[]
                          ).map((planId) => (
                            <div
                              key={planId}
                              className={cn(
                                "text-center p-2 rounded-lg",
                                planId === "business" && "bg-primary/10",
                              )}
                            >
                              <div className="text-xs text-muted-foreground mb-1 capitalize">
                                {plans.find((p) => p.id === planId)?.name}
                              </div>
                              <FeatureValue value={feature[planId]} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              ยังไม่แน่ใจว่าแพ็คเกจไหนเหมาะกับร้านคุณ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="#faq">อ่านคำถามที่พบบ่อย</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="https://line.me/ti/p/@posmonkey">
                  แชทกับเราทาง LINE
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
