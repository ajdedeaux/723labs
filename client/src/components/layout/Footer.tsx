import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">723 LABS</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building Machines That Build Business.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
            <Link href="/case-study"><a className="hover:text-foreground transition-colors">Case Study</a></Link>
            <Link href="/services"><a className="hover:text-foreground transition-colors">Services</a></Link>
            <Link href="/about"><a className="hover:text-foreground transition-colors">About</a></Link>
            <Link href="/contact"><a className="hover:text-foreground transition-colors">Contact</a></Link>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} 723 Labs. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
