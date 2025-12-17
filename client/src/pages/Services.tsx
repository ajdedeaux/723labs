import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">
          From Website to <br /> Operating System
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Five packages. One methodology. You choose how deep to go.
        </p>
      </section>

      <section className="pb-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`relative p-8 border ${
                pkg.popular ? "border-white bg-zinc-900" : "border-zinc-800 bg-zinc-950"
              } flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 font-mono">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold font-heading mb-2">{pkg.name}</h3>
              <div className="text-xl text-zinc-400 font-mono mb-4">{pkg.price}</div>
              <p className="text-muted-foreground text-sm mb-8 h-10">{pkg.desc}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-zinc-800">
                <div className="text-xs text-zinc-500 font-mono mb-4">TIMELINE: {pkg.timeline}</div>
                <Link href="/contact">
                  <Button className={`w-full rounded-none ${pkg.popular ? "bg-white text-black hover:bg-zinc-200" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                    Select Package
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6">Not Sure Which Package?</h2>
          <p className="text-muted-foreground mb-10">
            Let's talk through your situation. I'll tell you what makes sense — even if it's not the biggest package.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none px-8">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
