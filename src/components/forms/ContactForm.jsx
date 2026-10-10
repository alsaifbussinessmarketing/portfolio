"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "@/services/email";
import { Button } from "@/components/ui/Button";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendContactEmail(data);

    setIsSubmitting(false);
    if (result.success) {
      setSubmitStatus("success");
      reset();
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Input */}
      <div>
        <label className="block text-sm font-semibold text-heading mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          {...register("name", { required: "Full name is required" })}
          className="w-full px-4 py-3 rounded-md bg-bg-main border border-border-subtle focus:border-primary focus:outline-none transition-colors"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-sm font-semibold text-heading mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john@company.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full px-4 py-3 rounded-md bg-bg-main border border-border-subtle focus:border-primary focus:outline-none transition-colors"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Service Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-heading mb-2">
            Service Interested In
          </label>
          <select
            {...register("service")}
            className="w-full px-4 py-3 rounded-md bg-bg-main border border-border-subtle focus:border-primary focus:outline-none transition-colors text-body"
          >
            <option value="Media Buying">Media Buying & PPC</option>
            <option value="Growth Marketing">Growth Marketing</option>
            <option value="Brand Strategy">Brand & Viral Campaigns</option>
            <option value="SEO & Analytics">SEO & Market Insights</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-heading mb-2">
            Monthly Ad Budget
          </label>
          <select
            {...register("budget")}
            className="w-full px-4 py-3 rounded-md bg-bg-main border border-border-subtle focus:border-primary focus:outline-none transition-colors text-body"
          >
            <option value="Under $5k">Under $5,000 / mo</option>
            <option value="$5k-$15k">$5,000 - $15,000 / mo</option>
            <option value="$15k+">$15,000+ / mo</option>
          </select>
        </div>
      </div>

      {/* Message Input */}
      <div>
        <label className="block text-sm font-semibold text-heading mb-2">
          Project Details
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your brand goals and timeline..."
          {...register("message", { required: "Please enter a message" })}
          className="w-full px-4 py-3 rounded-md bg-bg-main border border-border-subtle focus:border-primary focus:outline-none transition-colors"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submission Feedback Banner */}
      {submitStatus === "success" && (
        <div className="p-4 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm">
          Thank you! Your message has been received. Our team will get back to you shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
          Something went wrong sending your message. Please try again or email us directly.
        </div>
      )}

      {/* Submit Button */}
      <Button
        variant="primary"
        size="lg"
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending Inquiry..." : "Submit Project Inquiry"}
      </Button>
    </form>
  );
};