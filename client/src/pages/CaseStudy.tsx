import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import mockup from "@assets/generated_images/catering_app_dashboard_mockup.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CaseStudy() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0.8]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <div className="grain" />
      <Navbar />

      <section className="pt-24 md:pt-40 pb-16 md:pb-20 container mx-auto px-6">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-8 text-white/80 backdrop-blur-sm border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              CASE STUDY: CHEF G EVENTS
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-8 md:mb-10 leading-[0.9]">
              How a Catering Business Became a <span className="text-white/40">Revenue Machine</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
              Chef G Events: From referral-dependent to systematically scalable in 6 weeks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-32 container mx-auto px-6">
        <motion.div 
          style={{ scale }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-50" />
          <img 
            src={mockup} 
            alt="Chef G Transformation" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </section>

      <section className="py-16 md:py-20 border-t border-white/[0.08]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8 text-white/40">Before: Great Food, No System</h2>
            <ul className="space-y-6">
              {[
                "No systematic lead capture (Instagram DMs, random emails)",
                "Manual follow-up — every lead required personal response",
                "No CRM — leads tracked in text messages and memory",
                "Outdated website that didn't reflect brand quality",
                "Inconsistent pricing — every quote started from scratch",
                "No marketing strategy — occasional Instagram posts only"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-white/60 font-light text-base md:text-lg">
                  <span className="text-red-500/50 mt-1 font-mono">0{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12 p-8 border-l border-white/20 bg-white/[0.02]">
              <p className="text-white/80 italic font-light leading-relaxed">
                "The business was successful on referrals alone — proof of an excellent product. But growth was capped by operational capacity."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold mb-8 text-white">After: Complete Operating System</h2>
            <div className="space-y-12">
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
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="font-bold text-xl mb-4 text-white">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-white/60 font-light">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-white/[0.02] border-y border-white/[0.08]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-16 text-center">The Numbers That Matter</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Lead Response", val: "Instant", sub: "24/7 Coverage" },
              { label: "Capture Rate", val: "100%", sub: "Fully Tracked" },
              { label: "Quote Time", val: "5 Min", sub: "Automated" },
              { label: "Projected ROAS", val: "20x+", sub: "High Return" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black border border-white/10 p-10 text-center rounded-2xl hover:border-white/30 transition-colors group"
              >
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                <div className="text-sm font-mono text-white/40 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xs text-white/20">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-40 text-center relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-10 tracking-tighter text-black">Want the Same System?</h2>
          <Link href="/contact">
            <Button size="lg" className="w-full md:w-auto rounded-full px-12 py-10 text-xl bg-black text-white hover:bg-black/90 hover:scale-105 transition-all shadow-2xl font-bold">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
