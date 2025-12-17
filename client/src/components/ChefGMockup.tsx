import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/dark_moody_gourmet_food_plating.png";
import { Star, ChevronDown, Menu } from "lucide-react";

export function ChefGMockup({ className }: { className?: string }) {
  return (
    <div className={`relative mx-auto bg-black rounded-[24px] p-[2px] shadow-2xl ${className}`} style={{ aspectRatio: '16/10', maxWidth: '1200px' }}>
      {/* Laptop Lid/Bezel */}
      <div className="absolute inset-0 bg-[#0a0a0a] rounded-[22px] ring-1 ring-white/10" />
      
      {/* Screen Area */}
      <div className="absolute inset-[12px] bg-black rounded-[14px] overflow-hidden border border-white/5 relative">
        
        {/* Reflection/Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent z-30 pointer-events-none" />
        
        {/* Website Content */}
        <div className="relative w-full h-full font-serif flex flex-col">
          
          {/* Navigation */}
          <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20">
            <div className="text-white font-bold tracking-[0.2em] text-sm uppercase border-b border-amber-500/50 pb-2">
              Chef G Events
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 text-[10px] text-white/90 uppercase tracking-widest font-sans font-medium">
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Menus</span>
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Private Dining</span>
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Gallery</span>
              <span className="px-4 py-2 border border-white/30 hover:bg-white hover:text-black transition-all cursor-pointer">Inquire</span>
            </div>

            {/* Mobile Nav Icon (Hidden on desktop) */}
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
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          {/* Main Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-12 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              </div>
              
              <p className="text-amber-400 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 font-sans font-semibold">
                Sacramento's Premier Private Chef
              </p>
              
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif italic mb-8 leading-tight drop-shadow-2xl">
                Where Flavor <br/> Hosts The Party
              </h1>
              
              <div className="w-16 h-[1px] bg-amber-500/80 mx-auto mb-10" />
              
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <button className="bg-amber-500 text-black text-[10px] md:text-xs font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors duration-300">
                  Book Your Experience
                </button>
                <button className="text-white border border-white/30 text-[10px] md:text-xs font-bold uppercase tracking-widest py-4 px-8 hover:bg-white hover:text-black transition-colors duration-300">
                  View Sample Menus
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar / Social Proof */}
          <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm p-6 flex justify-between items-end">
             <div className="text-white/40 text-[8px] uppercase tracking-widest font-sans">
                Featured In
             </div>
             <div className="flex gap-8 text-white/30 font-serif italic text-sm">
                <span>Sacramento Mag</span>
                <span>Edible</span>
                <span>Good Day Sac</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Camera Notch Area (Subtle) */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[14px] bg-[#0a0a0a] rounded-b-lg z-40 flex justify-center items-center">
         <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-white/5" />
      </div>

    </div>
  );
}
