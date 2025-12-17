import { motion } from "framer-motion";
import { Lock, Download, Calendar } from "lucide-react";

export function QuoteBuilderMockup({ className }: { className?: string }) {
  return (
    <div className={`relative bg-[#F9F8F6] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-sans ${className}`}>
      {/* App Header */}
      <div className="bg-white border-b border-zinc-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-full bg-[#C69C6D]/10 flex items-center justify-center border border-[#C69C6D]/20">
             <Lock className="w-3 h-3 text-[#C69C6D]" />
           </div>
           <div>
             <h3 className="text-zinc-900 font-serif text-sm tracking-wide font-bold">Chef G Tools</h3>
             <p className="text-zinc-400 text-[10px] uppercase tracking-widest">Internal System • v2.4</p>
           </div>
        </div>
        <div className="flex gap-2 items-center">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] text-green-600 font-medium uppercase tracking-wider">System Active</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* LEFT: Builder Form */}
        <div className="flex-1 p-6 md:p-10 space-y-10 border-r border-zinc-200 bg-[#F9F8F6] text-zinc-800">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif text-zinc-900 mb-2">Quote Builder</h2>
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em] font-medium">Chef G Events • Internal Tool</p>
          </div>

          {/* Client Info Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-zinc-200 pb-2 mb-4">
               <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Client Info</span>
            </div>
            <div className="bg-white rounded-lg border border-zinc-200 p-1 shadow-sm">
               <div className="px-4 py-3">
                 <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Client Name</div>
                 <div className="text-zinc-900 text-sm font-medium">Sarah Johnson</div>
               </div>
            </div>
          </div>

          {/* Event Timing */}
          <div className="space-y-4">
             <div className="flex justify-between items-end border-b border-zinc-200 pb-2 mb-4">
               <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Event Timing</span>
            </div>
            <div className="grid gap-3">
               <div className="bg-white rounded-lg border border-zinc-200 p-3 flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#C69C6D]" />
                    <span className="text-sm text-zinc-900 font-medium">Dec 17, 2025</span>
                  </div>
                  <span className="text-xs text-zinc-400">Date</span>
               </div>
               <div className="grid grid-cols-4 gap-2">
                  {['Morning', 'Afternoon', 'Evening', 'Late'].map((time, i) => (
                    <div key={time} className={`text-center p-3 rounded border text-[10px] uppercase tracking-wider cursor-pointer transition-all font-medium ${i === 2 ? 'bg-[#C69C6D] border-[#C69C6D] text-white shadow-md' : 'bg-white border-zinc-200 text-zinc-500 hover:border-[#C69C6D]/50'}`}>
                      {time}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Package Selection */}
          <div className="space-y-4">
             <div className="flex justify-between items-end border-b border-zinc-200 pb-2 mb-4">
               <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">1 — Select Package</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {/* Card 1 */}
              <div className="p-4 rounded-lg border border-zinc-200 bg-white hover:border-[#C69C6D]/50 transition-colors cursor-pointer shadow-sm group">
                 <div className="text-zinc-900 font-serif mb-1 group-hover:text-[#C69C6D] transition-colors">Taste</div>
                 <div className="text-[#C69C6D] text-sm font-bold">$750</div>
                 <div className="text-[9px] text-zinc-400 mt-2 uppercase tracking-wide">Up to 10 guests</div>
              </div>

              {/* Card 2 (Selected) */}
              <div className="p-4 rounded-lg border-2 border-[#C69C6D] bg-white relative cursor-pointer shadow-md transform scale-[1.02]">
                 <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#C69C6D] text-white text-[9px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">Most Popular</div>
                 <div className="text-zinc-900 font-serif mb-1 text-lg">Signature</div>
                 <div className="text-[#C69C6D] text-base font-bold">$1,500</div>
                 <div className="text-[9px] text-zinc-500 mt-2 uppercase tracking-wide font-medium">10-25 guests</div>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-lg border border-zinc-200 bg-white hover:border-[#C69C6D]/50 transition-colors cursor-pointer shadow-sm group">
                 <div className="text-zinc-900 font-serif mb-1 group-hover:text-[#C69C6D] transition-colors">Premier</div>
                 <div className="text-[#C69C6D] text-sm font-bold">$3,500</div>
                 <div className="text-[9px] text-zinc-400 mt-2 uppercase tracking-wide">25+ guests</div>
              </div>
            </div>
          </div>

          {/* Guest Count */}
          <div className="space-y-4">
             <div className="flex justify-between items-end border-b border-zinc-200 pb-2 mb-4">
               <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">2 — Guest Count</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg border border-zinc-200 p-2 flex justify-between items-center px-4 shadow-sm">
                 <div>
                   <div className="text-zinc-900 text-sm font-medium">Adults</div>
                   <div className="text-[10px] text-zinc-400 uppercase tracking-wide">Included in package</div>
                 </div>
                 <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-900 transition-colors">-</button>
                    <span className="text-zinc-900 font-mono w-4 text-center font-bold">25</span>
                    <button className="w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-900 transition-colors">+</button>
                 </div>
              </div>
              
              <div className="bg-white rounded-lg border border-zinc-200 p-2 flex justify-between items-center px-4 shadow-sm">
                 <div>
                   <div className="text-zinc-900 text-sm font-medium">Kids</div>
                   <div className="text-[10px] text-zinc-400 uppercase tracking-wide">12 & under</div>
                 </div>
                 <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-900 transition-colors">-</button>
                    <span className="text-zinc-900 font-mono w-4 text-center font-bold">0</span>
                    <button className="w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 flex items-center justify-center hover:bg-zinc-50 hover:text-zinc-900 transition-colors">+</button>
                 </div>
              </div>
            </div>
          </div>

          {/* Fees & Logistics (Placeholder for visual accuracy) */}
          <div className="space-y-4 opacity-60">
             <div className="flex justify-between items-end border-b border-zinc-200 pb-2 mb-4">
               <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">3 — Fees & Logistics</span>
            </div>
            <div className="bg-zinc-50 rounded-lg border border-zinc-200 border-dashed p-4 flex justify-center items-center">
               <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Configure Service & Travel</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Live Invoice Preview */}
        <div className="w-full lg:w-[360px] bg-white p-6 md:p-10 flex flex-col border-t lg:border-t-0 lg:border-l border-zinc-200 relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 bg-[#F9F8F6] opacity-50" />
           <div className="absolute inset-0 bg-[radial-gradient(#C69C6D_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />

           <div className="relative bg-white rounded-sm p-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] text-black border border-zinc-100 mb-8 transform rotate-1 transition-transform hover:rotate-0 duration-500">
              <div className="flex justify-between items-start mb-8 border-b border-zinc-100 pb-6">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-zinc-900">Chef G Events</h4>
                  <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1">Proposal #29401</p>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-zinc-400 uppercase tracking-wider mb-0.5">Date</div>
                  <div className="text-[11px] font-bold text-zinc-900">Dec 17, 2025</div>
                </div>
              </div>

              <div className="bg-[#F9F8F6] p-4 rounded-sm mb-6 border border-zinc-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-serif font-bold text-zinc-900">Signature Experience</span>
                  <span className="font-mono text-[#C69C6D] font-bold">$1,500.00</span>
                </div>
                <div className="text-[10px] text-zinc-500">25 adults included • 7 dishes</div>
              </div>

              <div className="space-y-3 py-4 border-t border-dashed border-zinc-200 text-[11px]">
                <div className="flex justify-between text-zinc-500">
                  <span>Subtotal</span>
                  <span className="font-mono">$1,500.00</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Service Charge (20%)</span>
                  <span className="font-mono">$300.00</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Est. Tax (8.75%)</span>
                  <span className="font-mono">$131.25</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-zinc-900 flex justify-between items-end">
                 <span className="font-serif text-base font-bold text-zinc-900">Estimated Total</span>
                 <span className="font-mono text-xl font-bold text-[#C69C6D]">$1,931.25</span>
              </div>
           </div>

           <div className="mt-auto space-y-3 relative z-10">
             <button className="w-full bg-[#C69C6D] text-white font-bold uppercase text-[10px] tracking-[0.2em] py-4 rounded-sm hover:bg-[#b08b60] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#C69C6D]/20">
               <Download className="w-4 h-4" />
               Download Proposal PDF
             </button>
             <p className="text-center text-[9px] text-zinc-400">Valid for 7 days • Terms & Conditions Apply</p>
           </div>
        </div>

      </div>
    </div>
  );
}
