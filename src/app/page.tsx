import { Hero } from "@/components/sections/hero";
import { AuditConsole } from "@/components/sections/audit-console";
import { FeatureSections } from "@/components/sections/feature-sections";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { LoginSection } from "@/components/sections/login-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AuditConsole />
      <FeatureSections />
      <PricingSection />
      <CtaBanner />
      <LoginSection />
    </>
  );
}
