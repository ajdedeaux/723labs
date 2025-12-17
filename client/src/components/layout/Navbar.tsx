import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/case-study", label: "Case Study" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          scrolled 
            ? "bg-black/50 backdrop-blur-xl border-white/[0.08] py-4" 
            : "bg-transparent border-transparent py-8"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-heading font-black tracking-tighter text-white hover:text-white/80 transition-colors z-50 relative group">
              723 LABS
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group py-2",
                    isActive(link.href) ? "text-white" : "text-white/60 hover:text-[#10B981]"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-[1px] bg-[#10B981] transition-all duration-300",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="rounded-full border-white/20 bg-transparent text-white hover:bg-[#10B981] hover:text-white hover:border-[#10B981] transition-all duration-500 px-6 tracking-wide text-xs uppercase font-bold"
              >
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link href={link.href}>
                    <a 
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-3xl font-heading font-bold tracking-tight transition-colors",
                        isActive(link.href) ? "text-white" : "text-white/40 hover:text-[#10B981]"
                      )}
                    >
                      {link.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link href="/contact">
                  <Button 
                    onClick={() => setIsOpen(false)} 
                    className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-[#10B981] hover:text-white mt-8"
                  >
                    Start Project
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
