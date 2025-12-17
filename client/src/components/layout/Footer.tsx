import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/[0.08] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-6">
            <h2 className="text-[12vw] leading-[0.8] font-heading font-bold tracking-tighter text-white/10 mb-8 select-none">
              723
            </h2>
            <div className="max-w-md">
              <p className="text-xl text-white mb-2 font-medium">Building Machines That Build Business.</p>
              <p className="text-white/40">
                Complete operating systems for service companies. <br />
                We don't sell websites. We sell leverage.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Sitemap</h4>
            <div className="flex flex-col gap-4">
              <Link href="/case-study"><a className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">Case Study <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></Link>
              <Link href="/services"><a className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">Services <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></Link>
              <Link href="/about"><a className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">About <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></Link>
              <Link href="/contact"><a className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">Contact <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></Link>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Socials</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-wider">
          <p>© {currentYear} 723 Labs. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
    </footer>
  );
}
