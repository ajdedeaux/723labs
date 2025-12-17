import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import mockup from "@assets/generated_images/catering_app_dashboard_mockup.png";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-mono mb-6 text-zinc-400 border border-zinc-700">
            CASE STUDY: CHEF G EVENTS
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-8">
            How a Catering Business Became a Revenue Machine
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Chef G Events: From referral-dependent to systematically scalable in 6 weeks.
          </p>
        </div>
      </section>

      <section className="pb-20 container mx-auto px-6">
        <img 
          src={mockup} 
          alt="Chef G Transformation" 
          className="w-full rounded border border-zinc-800 shadow-2xl"
        />
      </section>

      <section className="py-20 border-t border-zinc-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">Before: Great Food, No System</h2>
            <ul className="space-y-4">
              {[
                "No systematic lead capture (Instagram DMs, random emails)",
                "Manual follow-up — every lead required personal response",
                "No CRM — leads tracked in text messages and memory",
                "Outdated website that didn't reflect brand quality",
                "Inconsistent pricing — every quote started from scratch",
                "No marketing strategy — occasional Instagram posts only"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-muted-foreground">
                  <span className="text-zinc-700 mt-1">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-mono text-zinc-500 border-l-2 border-zinc-800 pl-4">
              "The business was successful on referrals alone — proof of an excellent product. But growth was capped by operational capacity."
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold mb-8 text-white">After: Complete Operating System</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Digital Presence",
                  items: ["12+ page custom web application", "Mobile-first premium aesthetic", "Conversion-optimized homepage"]
                },
                {
                  title: "Lead Capture & CRM",
                  items: ["Multi-step contact form", "Unique Lead ID system", "Auto-logging to Google Sheets"]
                },
                {
                  title: "AI-Powered Response",
                  items: ["Voice AI calls leads in < 60s", "Natural conversation & qualification", "Warm handoff to human team"]
                },
                {
                  title: "Booking & Payments",
                  items: ["Automated booking flow", "Real-time calendar sync", "$200 deposit collection via Stripe"]
                }
              ].map((group, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-3 text-zinc-200">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-zinc-400 text-sm">
                        <Check className="w-4 h-4 text-white mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/30 border-y border-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">The Numbers That Matter</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Lead Response", val: "Instant (24/7)" },
              { label: "Capture Rate", val: "100% Tracked" },
              { label: "Quote Time", val: "5 Minutes" },
              { label: "Projected ROAS", val: "20x+" }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 p-8 text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                <div className="text-sm font-mono text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold mb-8">Want the Same System?</h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-none px-10 py-6 text-lg">
              Book a Discovery Call <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
