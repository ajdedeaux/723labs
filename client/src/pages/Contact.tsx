import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  website: z.string().optional(),
  challenge: z.string().min(10, "Tell us a bit about your challenge"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      challenge: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Request Received",
        description: "I'll be in touch within 24 hours to schedule your discovery call.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-40 pb-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-10 leading-[0.9]">
              Let's <br /> <span className="text-white/40">Talk.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-16 max-w-lg font-light leading-relaxed">
              45 minutes. No charge. You'll leave with clarity on what you need — even if you don't hire me.
            </p>

            <div className="space-y-12 border-l border-white/10 pl-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">What happens next?</h3>
                <p className="text-white/50 font-light leading-relaxed text-lg">
                  1. You submit this form.<br />
                  2. I'll email you to book a time.<br />
                  3. We meet, audit your system, and see if there's a fit.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">Direct Email</h3>
                <p className="text-white/50 font-light text-lg hover:text-white transition-colors cursor-pointer">aj@723labs.io</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/40 text-xs uppercase tracking-widest font-bold">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-white transition-colors text-lg placeholder:text-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/40 text-xs uppercase tracking-widest font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-white transition-colors text-lg placeholder:text-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/40 text-xs uppercase tracking-widest font-bold">Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-white transition-colors text-lg placeholder:text-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/40 text-xs uppercase tracking-widest font-bold">Current Website (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-white transition-colors text-lg placeholder:text-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/40 text-xs uppercase tracking-widest font-bold">The Challenge</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What's the biggest bottleneck right now?" 
                          className="min-h-[120px] bg-transparent border-0 border-b border-white/20 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-white transition-colors text-lg placeholder:text-white/20 leading-relaxed" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-full py-8 text-lg bg-white text-black hover:bg-white/90 transition-all mt-4 font-bold" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <span className="flex items-center gap-2">Request Discovery Call <ArrowRight className="w-5 h-5" /></span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
