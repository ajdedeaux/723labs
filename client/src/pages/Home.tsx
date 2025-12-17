import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, X, Database, Bot, TrendingUp } from "lucide-react";
import { ChefGMockup } from "@/components/ChefGMockup";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotateX = useTransform(scrollY, [0, 500], [20, 0]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          
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
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-heading font-bold tracking-tighter leading-[0.85] mb-10 text-white drop-shadow-2xl">
                I BUILD THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
                  MACHINE
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
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-3xl mb-12"
            >
              <div className="w-12 h-[1px] bg-white/30 hidden md:block" />
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
                Complete business operating systems for service companies. <br className="hidden md:block" />
                Not websites — revenue machines that run while you sleep.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-lg px-10 py-8 bg-white text-black hover:bg-white/90 transition-all hover:scale-105 duration-300 font-bold tracking-tight shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                  Book a Discovery Call
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-40 bg-black relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-32 md:flex justify-between items-end">
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

          <div className="grid md:grid-cols-3 gap-12">
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
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group relative border-l border-white/10 pl-8 py-8 hover:border-white/40 transition-colors duration-500"
              >
                <div className="mb-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {col.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 font-heading text-white">{col.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">{col.desc}</p>
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
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
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
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-6 text-lg text-zinc-400 border-b border-white/10 pb-4 last:border-0 font-light"
                  >
                    <span className="text-xs font-bold text-white/30 font-mono">0{i + 1}</span>
                    {stat}
                  </motion.li>
                ))}
              </ul>

              <Link href="/case-study">
                <Button variant="outline" size="lg" className="rounded-full border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 h-14 px-8 text-base">
                  See the Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <motion.div 
              style={{ y: y2 }}
              className="relative group"
            >
              {/* Subtle Glow - White/Zinc only */}
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              
              {/* Clean Mockup Container - Minimal Tilt */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl bg-zinc-900 shadow-2xl ring-1 ring-white/10"
              >
                <ChefGMockup className="rounded-lg shadow-inner" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-40 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 leading-tight text-white">
            "Build Fast. Test Relentlessly. <br /> <span className="text-white/30">Kill What Doesn't Work.</span>"
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
            We built a text-based AI assistant. It worked technically. But real-world testing showed it needed more personal touch. We killed it in a week and pivoted to voice AI — which performed significantly better on day one.
          </p>
          <div className="inline-block border border-white/20 rounded-full px-6 py-2">
            <p className="text-white font-mono text-sm tracking-widest uppercase">
              Automation finds the humans. That's the point.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-heading font-bold mb-8 tracking-tighter text-white">
            Let's See If This Fits.
          </h2>
          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
            45 minutes. No charge. You'll leave with clarity on what you need — even if you don't hire me.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full text-xl px-12 py-10 bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 btn-glow font-bold">
              Schedule Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
