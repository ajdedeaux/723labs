import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-8">
          From Zero to <br /> Operating Systems.
        </h1>
        <p className="text-xl text-muted-foreground font-mono">The 723 Labs Story</p>
      </section>

      <section className="pb-32 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-invert prose-lg">
          <p className="text-2xl leading-relaxed text-zinc-200 mb-12">
            In April 2023, I walked out of federal prison after nine years. No network. No resume. No clue how much the world had changed.
          </p>
          
          <p className="mb-8 text-muted-foreground">
            Within 18 months, I became the #1 Sleep Expert in my Mattress Firm district, generating $1.2M+ in annual sales. I landed a junior consultant role at Analytics AIML. And I built a complete business operating system for a catering company — while working a full-time W-2.
          </p>

          <h3 className="text-white font-heading text-2xl mt-12 mb-6">How I Learned</h3>
          <p className="mb-8 text-muted-foreground">
            I didn't go to bootcamp. I didn't hire a coach. I learned by doing. My uncle Frank Shines — Lean Six Sigma Black Belt — taught me to see business as systems. But the real accelerator was AI. I realized that what took developers weeks, I could build in days. The constraint of having no formal training became an advantage.
          </p>

          <h3 className="text-white font-heading text-2xl mt-12 mb-6">Why 723 Labs?</h3>
          <p className="mb-8 text-muted-foreground">
            The name isn't random. 7/23 marks a turning point — a date that changed everything. It's a reminder that transformation happens on specific days, through specific decisions.
          </p>
          
          <div className="p-8 border-l-2 border-white bg-zinc-900/50 my-12">
            <p className="text-xl italic text-zinc-300">
              "Small business owners don't need another agency that charges $50K and takes six months. They need someone who understands constraint. Who builds fast because they have to."
            </p>
          </div>

          <h3 className="text-white font-heading text-2xl mt-12 mb-6">Why Clients Trust Me</h3>
          <p className="mb-8 text-muted-foreground">
            I don't hide my story. I lead with it. When a client asks "Why should I trust you?" — the answer is simple: Look at what I built. Look at the results. And understand that I built this while working 50+ hours a week at a day job.
          </p>

          <p className="text-white font-bold text-xl mt-12">
            If I can build this under those constraints, imagine what I can do with your business.
          </p>
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-800">
          <Link href="/contact">
            <Button size="lg" className="rounded-none text-lg px-8">
              Let's Build Your Machine
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
