import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Database, Bot, TrendingUp } from "lucide-react";
import heroBg from "@assets/generated_images/dark_minimal_tech_grid_background.png";
import mockup from "@assets/generated_images/catering_app_dashboard_mockup.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[0.9] mb-8">
                I BUILD THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                  MACHINE
                </span>
                <br />
                SO YOU CAN <br />
                FOCUS ON <br />
                THE WORK.
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Complete business operating systems for service companies. 
              Not websites — revenue machines that run while you sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-none text-lg px-8 py-6 bg-foreground text-background hover:bg-zinc-200">
                  [ Book a Discovery Call ]
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              You're Probably Doing This Right Now
            </h2>
            <p className="text-muted-foreground text-lg">
              Great service. No system. That's the gap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "Leads come in through 5 different channels, none connected.",
              "You respond when you can — sometimes same day, sometimes not.",
              "Your 'CRM' is a spreadsheet you haven't opened in weeks.",
              "Your website looks fine but doesn't actually convert.",
              "You know you need a system but don't have time to build one."
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-zinc-800 bg-zinc-900/30 flex gap-4 items-start"
              >
                <X className="w-6 h-6 text-zinc-500 shrink-0 mt-1" />
                <p className="text-zinc-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              What If Your Business <br />
              Ran Without You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              One engagement. Complete system. You own everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Database className="w-8 h-8 mb-6 text-zinc-100" />,
                title: "Capture",
                desc: "Website that converts, forms that qualify, 24/7 lead capture."
              },
              {
                icon: <Bot className="w-8 h-8 mb-6 text-zinc-100" />,
                title: "Automate",
                desc: "AI that responds instantly, calendars that sync, payments that collect."
              },
              {
                icon: <TrendingUp className="w-8 h-8 mb-6 text-zinc-100" />,
                title: "Grow",
                desc: "Marketing strategy based on real data, ads that work, ROI you can measure."
              }
            ].map((col, i) => (
              <div key={i} className="border-l border-zinc-800 pl-8 py-4">
                {col.icon}
                <h3 className="text-2xl font-bold mb-4 font-heading">{col.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Proof (Chef G Teaser) */}
      <section className="py-32 border-y border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-mono mb-6 text-zinc-400 border border-zinc-700">
                CASE STUDY: CHEF G EVENTS
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                Built in 6 Weeks. <br />
                Paying for Itself in 60 Days.
              </h2>
              
              <ul className="space-y-6 mb-10 font-mono text-sm md:text-base">
                {[
                  "12+ page custom web application",
                  "Voice AI that calls leads in < 60s",
                  "$2,125 average ticket",
                  "19% close rate",
                  "20x+ projected ROAS"
                ].map((stat, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-300 border-b border-zinc-800 pb-4 last:border-0">
                    <span className="text-white font-bold">0{i + 1}</span>
                    {stat}
                  </li>
                ))}
              </ul>

              <Link href="/case-study">
                <Button variant="outline" size="lg" className="rounded-none border-zinc-700 hover:bg-zinc-800 text-white">
                  See the Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-800 to-transparent opacity-20 blur-2xl" />
              <img 
                src={mockup} 
                alt="Chef G Dashboard" 
                className="w-full rounded border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            "Build Fast. Test Relentlessly. <br /> Kill What Doesn't Work."
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            We built a text-based AI assistant. It worked technically. But real-world testing showed it needed more personal touch. We killed it in a week and pivoted to voice AI — which performed significantly better on day one. That's the methodology: every automation is tested against real leads.
          </p>
          <p className="text-white font-mono text-sm tracking-widest uppercase">
            Automation finds the humans. That's the point.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Traditional Agency vs. 723 Labs</h2>
          
          <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 max-w-5xl mx-auto">
            {/* Headers */}
            <div className="bg-zinc-950 p-6 hidden md:block"></div>
            <div className="bg-zinc-950 p-6 font-bold text-zinc-500 text-center uppercase tracking-widest text-sm">Traditional</div>
            <div className="bg-zinc-900 p-6 font-bold text-white text-center uppercase tracking-widest text-sm relative">
              723 Labs
              <div className="absolute top-0 left-0 w-full h-1 bg-white" />
            </div>

            {/* Rows */}
            {[
              { label: "Cost", trad: "$45K - $133K", us: "$6K - $25K" },
              { label: "Timeline", trad: "3-6 months", us: "4-6 weeks" },
              { label: "Deliverables", trad: "Website, maybe strategy", us: "Complete Operating System" },
              { label: "AI Included", trad: "$10K add-on", us: "Standard" },
              { label: "Ongoing Cost", trad: "$850 - $3,700/mo", us: "<$100/mo" },
            ].map((row, i) => (
              <>
                <div className="bg-zinc-950 p-6 font-mono text-zinc-400 flex items-center border-t md:border-t-0 border-zinc-800 md:justify-start justify-center font-bold md:font-normal">
                  {row.label}
                </div>
                <div className="bg-zinc-950 p-6 text-zinc-400 flex items-center justify-center border-t md:border-t-0 border-zinc-800 text-center">
                  <span className="md:hidden font-bold mr-2 text-zinc-600">Trad:</span> {row.trad}
                </div>
                <div className="bg-zinc-900 p-6 text-white font-bold flex items-center justify-center border-t md:border-t-0 border-zinc-800 text-center">
                   <span className="md:hidden font-bold mr-2 text-zinc-500">723:</span> {row.us}
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-50 text-zinc-950 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter">
            Let's See If This Fits.
          </h2>
          <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            45 minutes. No charge. You'll leave with clarity on what you need — even if you don't hire me.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none text-xl px-12 py-8 bg-zinc-950 text-white hover:bg-zinc-800">
              Schedule Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
