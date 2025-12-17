import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const packages = [
    {
      name: "Foundation Build",
      price: "$3,500 - $5,000",
      desc: "For businesses that need a complete digital presence from scratch.",
      features: [
        "5-8 page web application",
        "Mobile-responsive design",
        "Lead capture forms",
        "CRM integration (Google Sheets)",
        "Email + SMS notifications",
        "Documentation and training"
      ],
      timeline: "2-3 weeks"
    },
    {
      name: "Intelligence Layer",
      price: "$6,000 - $8,500",
      desc: "For businesses ready to add AI capabilities.",
      features: [
        "Everything in Foundation",
        "AI customer service assistant",
        "Conversation logging to CRM",
        "Lead scoring and temperature",
        "Human handoff automation"
      ],
      timeline: "3-4 weeks"
    },
    {
      name: "Conversion Engine",
      price: "$9,000 - $12,000",
      popular: true,
      desc: "For businesses ready for automated booking and payments.",
      features: [
        "Everything in Intelligence",
        "Automated booking flow",
        "Stripe payment integration",
        "Calendar integration",
        "Deposit collection"
      ],
      timeline: "4-5 weeks"
    },
    {
      name: "Growth System",
      price: "$12,000 - $16,000",
      desc: "For businesses ready to scale with marketing.",
      features: [
        "Everything in Conversion",
        "Lead data analysis",
        "Complete marketing strategy",
        "Ad creative library",
        "A/B testing framework",
        "ROI modeling"
      ],
      timeline: "5-6 weeks"
    },
    {
      name: "Full Operating System",
      price: "$18,000 - $25,000",
      desc: "For businesses that want everything — the complete Chef G model.",
      features: [
        "Everything in Growth",
        "Internal operations tools",
        "Complete documentation (10+ docs)",
        "Brand kit with usage guidelines",
        "Priority support"
      ],
      timeline: "6-8 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-hidden">
      <div className="grain" />
      <Navbar />

      <section className="pt-24 md:pt-40 pb-16 md:pb-24 container mx-auto px-6 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-heading font-bold tracking-tighter mb-8 leading-[0.9]">
            From Website to <br /> <span className="text-white/40">Operating System</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Five packages. One methodology. You choose how deep to go.
          </p>
        </motion.div>
      </section>

      <section className="pb-16 md:pb-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative p-8 md:p-10 rounded-2xl border transition-all duration-500 flex flex-col group ${
                pkg.popular 
                  ? "border-white/20 bg-white/[0.03] shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)]" 
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-bold px-4 py-1.5 font-mono uppercase tracking-widest rounded-bl-xl rounded-tr-xl">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold font-heading mb-2">{pkg.name}</h3>
              <div className="text-xl text-zinc-400 font-mono mb-6">{pkg.price}</div>
              <p className="text-zinc-300 text-sm mb-8 h-10 font-light leading-relaxed">{pkg.desc}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex gap-3 text-sm text-zinc-300 font-light group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover:text-emerald-400 transition-colors" />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-8 border-t border-white/10 group-hover:border-white/20 transition-colors">
                <div className="text-xs text-zinc-500 font-mono mb-6 uppercase tracking-widest">Timeline: {pkg.timeline}</div>
                <Link href="/contact">
                  <Button className={`w-full rounded-full h-12 text-sm font-bold tracking-wide transition-all duration-300 ${
                    pkg.popular 
                      ? "bg-white text-black hover:bg-[#10B981] hover:text-white hover:scale-[1.02]" 
                      : "bg-white/10 text-white border border-white/10 hover:bg-[#10B981] hover:text-white hover:border-[#10B981]"
                  }`}>
                    Select Package
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-32 relative overflow-hidden bg-white text-black border-t border-white/10">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-black">Not Sure Which Package?</h2>
          <p className="text-zinc-600 mb-12 text-lg font-light leading-relaxed">
            Let's talk through your situation. I'll tell you what makes sense — even if it's not the biggest package.
          </p>
          <Link href="/contact">
            <Button size="lg" className="w-full md:w-auto rounded-full px-10 py-8 text-lg bg-black text-white hover:bg-black/90 hover:scale-105 transition-all shadow-2xl font-bold">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
