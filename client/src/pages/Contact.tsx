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
import { Loader2 } from "lucide-react";
import { useState } from "react";

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-8">
              Let's Talk.
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-lg">
              45 minutes. No charge. You'll leave with clarity on what you need — even if you don't hire me.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">What happens next?</h3>
                <p className="text-zinc-400">
                  1. You submit this form.<br />
                  2. I'll email you to book a time.<br />
                  3. We meet, audit your system, and see if there's a fit.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-zinc-400">aj@723labs.io</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 border border-zinc-800">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-zinc-950 border-zinc-800" />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="bg-zinc-950 border-zinc-800" />
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
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} className="bg-zinc-950 border-zinc-800" />
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
                      <FormLabel>Current Website (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://" {...field} className="bg-zinc-950 border-zinc-800" />
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
                      <FormLabel>What's the biggest bottleneck right now?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Leads are falling through cracks? Manual data entry? No time?" 
                          className="min-h-[120px] bg-zinc-950 border-zinc-800" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-none py-6 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Request Discovery Call"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
