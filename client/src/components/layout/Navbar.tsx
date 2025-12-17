import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/case-study", label: "Case Study" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-heading font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
            723 LABS
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline" className="rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all">
              [ Let's Talk ]
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${
                      isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button onClick={() => setIsOpen(false)} className="w-full rounded-none mt-4">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
