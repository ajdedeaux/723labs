import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/dark_appetizer_spread_on_slate.png";
import { Menu } from "lucide-react";

export function ChefGMockup({ className }: { className?: string }) {
  return (
    <div className={`relative mx-auto bg-black rounded-[24px] p-[2px] shadow-2xl ${className}`} style={{ aspectRatio: '16/10', maxWidth: '1200px' }}>
      {/* Laptop Lid/Bezel */}
      <div className="absolute inset-0 bg-[#0a0a0a] rounded-[22px] ring-1 ring-white/10" />
      
      {/* Screen Area */}
      <div className="absolute inset-[12px] bg-black rounded-[14px] overflow-hidden border border-white/5 relative flex flex-col">
        
        {/* Reflection/Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent z-30 pointer-events-none" />

        {/* Top Announcement Bar */}
        <div className="relative z-20 bg-[#0a0a0a] border-b border-white/5 py-2 text-center hidden md:block">
           <p className="text-[9px] tracking-[0.2em] text-[#C69C6D] uppercase font-sans font-medium">
             Now Booking · December Events · Reserve Your Date
           </p>
        </div>
        
        {/* Website Content */}
        <div className="relative w-full h-full font-serif flex flex-col bg-black">
          
          {/* Navigation */}
          <div className="absolute top-0 left-0 right-0 px-10 py-6 flex justify-between items-center z-20">
            <div className="text-[#C69C6D] font-serif text-2xl tracking-wide">
              Chef G Events
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10 text-[12px] text-white/90 font-sans font-medium tracking-wide">
              <span className="hover:text-[#C69C6D] transition-colors cursor-pointer">Home</span>
              <span className="hover:text-[#C69C6D] transition-colors cursor-pointer">Menus</span>
              <span className="hover:text-[#C69C6D] transition-colors cursor-pointer">Pricing</span>
              <span className="hover:text-[#C69C6D] transition-colors cursor-pointer">About</span>
              <button className="bg-[#C69C6D] text-black px-6 py-2.5 rounded-[2px] font-bold text-[11px] uppercase tracking-wider hover:bg-white transition-colors">
                Let's Talk
              </button>
            </div>

            {/* Mobile Nav Icon */}
            <div className="md:hidden text-white">
              <Menu className="w-5 h-5" />
            </div>
          </div>

          {/* Hero Background */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          </div>

          {/* Main Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-12 pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white text-6xl md:text-7xl lg:text-[5.5rem] font-serif mb-8 leading-[1.1] drop-shadow-2xl tracking-tight">
                Where Flavor <br/> <span className="text-[#C69C6D]">Hosts The Party</span>
              </h1>
              
              <p className="text-white/90 text-sm md:text-lg font-sans font-light mb-12 max-w-lg mx-auto leading-relaxed antialiased">
                Trusted for 100+ celebrations across <br/> Sacramento & the Bay Area.
              </p>
              
              <button className="bg-[#C69C6D] text-black text-xs md:text-sm font-bold uppercase tracking-[0.15em] py-4 px-10 hover:bg-white transition-colors duration-300 rounded-[2px] shadow-[0_10px_40px_-10px_rgba(198,156,109,0.3)]">
                Book Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Camera Notch Area */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[14px] bg-[#0a0a0a] rounded-b-lg z-40 flex justify-center items-center">
         <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-white/5" />
      </div>

    </div>
  );
}
