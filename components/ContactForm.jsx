"use client";
import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle, Check } from "lucide-react";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name should be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email format" }),
  message: z
    .string()
    .min(5, { message: "Message should be at least 5 characters long" }),
});

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "", // Specify your default values here
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setSuccessMessage(result.message);
      if (result.ok) {
        // Reset the form after a brief delay (e.g., 2 seconds)
        setTimeout(() => {
          reset();
          setSuccessMessage(null); // Clear the success message
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onError = (errors) => {
    console.error(errors);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[768px]">
      <h2 className="mb-16 text-white md:text-3xl lg:text-5xl relative">
        <span className="block pb-4 relative z-10 p-4">Contact Me</span>
        <span className="border-gradient-shatira"></span>
      </h2>
      {successMessage ? (
        <Alert className="flex flex-col max-w-48 border-green-500 border-2 bg-transparent text-green-500">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription className="flex">
            {successMessage}
            <Check size={18} />
          </AlertDescription>
        </Alert>
      ) : (
        <Form {...ContactForm}>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="bg-transparent flex flex-col w-full m-4"
          >
            <FormItem>
              <Label>Name</Label>
              <Input
                {...register("name")}
                className="bg-transparent focus-visible:ring-shatiraBorder focus-visible:ring-offset-0 border-slate-900 focus:outline-none"
                placeholder="Enter your name"
              />
              {errors.name && (
                <Alert variant="destructive" className="relative">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errors.name.message}</AlertDescription>
                </Alert>
              )}
            </FormItem>
            <FormItem>
              <Label>Email</Label>
              <Input
                {...register("email")}
                className="bg-transparent focus-visible:ring-shatiraBorder focus-visible:ring-offset-0 border-slate-900 focus:outline-none"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <Alert variant="destructive" className="relative">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errors.email.message}</AlertDescription>
                </Alert>
              )}
            </FormItem>
            <FormItem className="mb-4">
              <Label>Message</Label>
              <Textarea
                {...register("message")}
                className="bg-transparent focus-visible:ring-shatiraBorder focus-visible:ring-offset-0 border-slate-900 focus:outline-none"
                placeholder="Enter your message"
              />
              {errors.message && (
                <Alert variant="destructive" className="relative">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errors.message.message}</AlertDescription>
                </Alert>
              )}
            </FormItem>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
