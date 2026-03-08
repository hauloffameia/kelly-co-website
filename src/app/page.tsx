import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
// import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Features />
      <Pricing />
      {/* Uncomment below to re-enable the reviews section */}
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
    </div>
  );
}
