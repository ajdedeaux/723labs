import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, X, Database, Bot, TrendingUp } from "lucide-react";
import heroTexture from "@assets/generated_images/dark_cinematic_fog_texture.png";
import mockup from "@assets/generated_images/catering_app_dashboard_mockup.png";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black font-sans">
      <div className="grain" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0 bg-background">
          <div 
            className="absolute inset-0 opacity-80 bg-cover bg-center mix-blend-screen scale-105"
            style={{ backgroundImage: `url(${heroTexture})` }}
          />
          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px]" 
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-heading font-bold tracking-tighter leading-[0.85] mb-10 text-white drop-shadow-2xl">
                I BUILD THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 relative">
                  MACHINE
                  <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#10B981] opacity-80" />
                </span>
                <br />
                SO YOU CAN <br />
                FOCUS ON <br />
                THE WORK.
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-3xl mb-12"
            >
              <div className="w-12 h-[1px] bg-white/30 hidden md:block" />
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                Complete business operating systems for service companies. <br className="hidden md:block" />
                Not websites — revenue machines that run while you sleep.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-lg px-10 py-8 bg-white text-black hover:bg-white/90 transition-all hover:scale-105 duration-300 font-bold tracking-tight btn-glow shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  Book a Discovery Call
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-sm tracking-widest uppercase animate-pulse hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          Scroll to Explore
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-32 border-t border-white/[0.08] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center text-white">
              You're Probably Doing This Right Now
            </h2>
            <p className="text-zinc-500 text-xl text-center font-light">
              Great service. No system. That's the gap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0, duration: 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-2xl flex gap-5 items-start group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <X className="w-4 h-4 text-white/40 group-hover:text-red-500 transition-colors" />
                </div>
                <p className="text-zinc-300 font-light leading-relaxed group-hover:text-white transition-colors">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-24 md:flex justify-between items-end">
            <div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-white">
                What If Your Business <br />
                Ran Without You?
              </h2>
            </div>
            <p className="text-xl text-zinc-500 max-w-sm font-light mt-8 md:mt-0 text-right">
              One engagement. Complete system. <br />You own everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Capture",
                desc: "Website that converts, forms that qualify, 24/7 lead capture."
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Automate",
                desc: "AI that responds instantly, calendars that sync, payments that collect."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Grow",
                desc: "Marketing strategy based on real data, ads that work, ROI you can measure."
              }
            ].map((col, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.1 }}
                className="group relative border-l border-white/10 pl-8 py-8 hover:border-emerald-500/50 transition-colors duration-500"
              >
                <div className="mb-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                  {col.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 font-heading text-white">{col.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light group-hover:text-zinc-200 transition-colors">{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Proof (Chef G Teaser) */}
      <section className="py-40 border-y border-white/[0.08] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-8 text-white/80 backdrop-blur-sm border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                CASE STUDY: CHEF G EVENTS
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 leading-[0.9] tracking-tight text-white">
                Built in 6 Weeks. <br />
                <span className="text-white/40">Paying for Itself in 60 Days.</span>
              </h2>
              
              <ul className="space-y-6 mb-12">
                {[
                  "12+ page custom web application",
                  "Voice AI that calls leads in < 60s",
                  "$2,125 average ticket",
                  "19% close rate",
                  "20x+ projected ROAS"
                ].map((stat, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0, duration: 0.1 }}
                    className="flex items-center gap-6 text-lg text-zinc-400 border-b border-white/10 pb-4 last:border-0 font-light"
                  >
                    <span className="text-xs font-bold text-white/30 font-mono">0{i + 1}</span>
                    {stat}
                  </motion.li>
                ))}
              </ul>

              <Link href="/case-study">
                <Button variant="outline" size="lg" className="rounded-full border-white/20 hover:bg-[#10B981] hover:text-white hover:border-[#10B981] transition-all duration-300 h-14 px-8 text-base">
                  See the Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 blur-3xl rounded-full" />
              {/* Mockup removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-32 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-background to-background" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 leading-tight text-white">
            "Automate Until It Breaks."
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
            We automate aggressively — not to replace humans, but to find where they are irreplaceable. When automation hits a wall, that's the signal. That's where you hire. That's where you pay top dollar.
          </p>
          <div className="inline-block border border-white/20 rounded-full px-6 py-2">
            <p className="text-white font-mono text-sm tracking-widest uppercase">
              The savings fund the talent.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32 border-t border-white/[0.08]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-16 text-center tracking-tight text-white">Traditional Agency vs. 723 Labs</h2>
          
          <div className="grid md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 max-w-6xl mx-auto rounded-2xl overflow-hidden">
            {/* Headers */}
            <div className="bg-zinc-950/50 p-8 hidden md:block backdrop-blur-md"></div>
            <div className="bg-zinc-950/50 p-8 font-bold text-white/40 text-center uppercase tracking-widest text-xs backdrop-blur-md">Traditional</div>
            <div className="bg-white/5 p-8 font-bold text-white text-center uppercase tracking-widest text-xs relative backdrop-blur-md">
              723 Labs
              <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
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
                <div className="bg-zinc-950 p-6 font-mono text-white/40 flex items-center justify-center md:justify-start font-bold md:font-normal text-sm border-t md:border-t-0 border-white/5">
                  {row.label}
                </div>
                <div className="bg-zinc-950 p-6 text-white/40 flex items-center justify-center text-center font-light border-t md:border-t-0 border-white/5">
                  <span className="md:hidden font-bold mr-2 text-white/20">Trad:</span> {row.trad}
                </div>
                <div className="bg-white/[0.03] p-6 text-white font-bold flex items-center justify-center text-center border-t md:border-t-0 border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                   <span className="md:hidden font-bold mr-2 text-white/50">723:</span> {row.us}
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-heading font-bold mb-8 tracking-tighter text-black">
            Let's See If This Fits.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl mx-auto font-light">
            45 minutes. No charge. You'll leave with clarity on what you need — even if you don't hire me.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full text-xl px-12 py-10 bg-black text-white hover:bg-black/90 hover:scale-105 transition-all duration-300 shadow-2xl font-bold">
              Schedule Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
