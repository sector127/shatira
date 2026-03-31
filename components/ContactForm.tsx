"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Check, Send } from "lucide-react";
import SectionHead from "./ui/SectionHead";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: result.message });
        form.reset();
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus({ type: "error", message: result.message || "Failed to send." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="contact" className="w-full max-w-2xl mx-auto py-20 px-4">
      <SectionHead title="Get In Touch" />
      
      {status?.type === "success" ? (
        <Alert className="bg-green-500/10 border-green-500/50 text-green-500 rounded-2xl p-6">
          <Check className="h-5 w-5" />
          <AlertTitle className="text-lg font-bold">Success!</AlertTitle>
          <AlertDescription>{status.message}</AlertDescription>
        </Alert>
      ) : (
        <div className="brutal-card rounded-none p-8 relative overflow-hidden bg-card">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background border-2 border-foreground rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] focus-visible:ring-0 focus-visible:border-primary focus-visible:shadow-brutal h-12" />
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
                      <Input placeholder="your@email.com" {...field} className="bg-background border-2 border-foreground rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] focus-visible:ring-0 focus-visible:border-primary focus-visible:shadow-brutal h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message..." 
                        {...field} 
                        className="bg-background border-2 border-foreground rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] focus-visible:ring-0 focus-visible:border-primary focus-visible:shadow-brutal min-h-[150px]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {status?.type === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="brutal-btn w-full mt-4"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
