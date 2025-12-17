import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <div className="grain" />
      <Navbar />
      
      <section className="pt-40 pb-20 container mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter mb-10 leading-[0.9]">
            From Zero to <br /> <span className="text-white/40">Operating Systems.</span>
          </h1>
          <p className="text-xl text-white/50 font-mono tracking-widest uppercase pl-2 border-l border-white/20">The 723 Labs Story</p>
        </motion.div>
      </section>

      <section className="pb-32 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-4xl leading-relaxed text-white font-light mb-16">
              In April 2023, I walked out of federal prison after nine years. No network. No resume. No clue how much the world had changed.
            </p>
          </motion.div>
          
          <div className="space-y-8 text-white/70 font-light leading-relaxed text-lg pl-8 border-l border-white/10">
            <p>
              Within 18 months, I became the #1 Sleep Expert in my Mattress Firm district, generating $1.2M+ in annual sales. I landed a junior consultant role at Analytics AIML. And I built a complete business operating system for a catering company — while working a full-time W-2.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-white font-heading text-3xl mb-6">How I Learned</h3>
              <p className="text-white/60 font-light leading-relaxed">
                I didn't go to bootcamp. I didn't hire a coach. I learned by doing. My uncle Frank Shines — Lean Six Sigma Black Belt — taught me to see business as systems. But the real accelerator was AI. I realized that what took developers weeks, I could build in days. The constraint of having no formal training became an advantage.
              </p>
            </div>
            <div>
              <h3 className="text-white font-heading text-3xl mb-6">Why 723 Labs?</h3>
              <p className="text-white/60 font-light leading-relaxed">
                The name isn't random. 7/23 marks a turning point — a date that changed everything. It's a reminder that transformation happens on specific days, through specific decisions.
              </p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 border border-white/10 bg-white/[0.02] rounded-2xl my-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-white" />
            <p className="text-2xl italic text-white/90 font-heading leading-relaxed">
              "Small business owners don't need another agency that charges $50K and takes six months. They need someone who understands constraint. Who builds fast because they have to."
            </p>
          </motion.div>

          <h3 className="text-white font-heading text-3xl mt-20 mb-8">Why Clients Trust Me</h3>
          <p className="text-white/60 font-light leading-relaxed text-lg mb-12">
            I don't hide my story. I lead with it. When a client asks "Why should I trust you?" — the answer is simple: Look at what I built. Look at the results. And understand that I built this while working 50+ hours a week at a day job.
          </p>

          <p className="text-white font-bold text-2xl md:text-3xl leading-tight">
            If I can build this under those constraints, imagine what I can do with your business.
          </p>
        </div>
      </section>

      <section className="py-40 text-center relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 tracking-tighter text-black">Ready to Build?</h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-12 py-10 text-xl bg-black text-white hover:bg-black/90 hover:scale-105 transition-all shadow-2xl font-bold">
              Let's Build Your Machine
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
