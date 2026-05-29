"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Heading1, Main } from "../components";

export default function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "",
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  const GOOGLE_SHEET_SCRIPT_URI =
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URI;

  async function onSubmit(data) {
    setIsSubmitting(true);
    setSubmitMessage("Submitting...");

    const formData = new FormData();
  
    formData.append("type", data.type);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("message", data.message);

    try {
      const response = await fetch(
        GOOGLE_SHEET_SCRIPT_URI,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (result.success) {
        
        setSubmitMessage("I will back to you soon!");
        reset();
      } else {
        setSubmitMessage("Failed to submit form");
      }
      // Simulate form submission
    } catch (error) {
      console.error(error);
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 10000);
    }
  }

  return (
    <Container>
      <Main>
        <div className="mx-auto mt-10 w-full max-w-md">
          <Heading1 heading="Contact Me" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex w-full flex-col justify-start">
              <label htmlFor="type">
                Who you are?{" "}
                <span className="mb-4 text-sm text-red-600">*</span>
              </label>
              <select
                name="type"
                id="type"
                className="flex-1 rounded-md border-none bg-white px-4 py-2 font-normal shadow-sm ring-1 shadow-neutral-300/30 ring-neutral-200 outline-none placeholder:text-neutral-400"
                {...register("type", { required: "This feild is required" })}
              >
                <option value="" disabled selected>
                  Select an option...
                </option>
                <option value="hr">Hiring Recuitor</option>
                <option value="freelancer">Freelancer</option>
                <option value="colabrator">Colabrator</option>
                <option value="other">Other</option>
              </select>
              <p className="text-sm text-red-600">{errors.type?.message}</p>
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Hariom Kashyap"
                className="flex-1 rounded-md border-none bg-white px-4 py-2 font-normal shadow-sm ring-1 shadow-neutral-300/30 ring-neutral-200 outline-none placeholder:text-neutral-400"
                {...register("name", { required: "Name is required" })}
              />
              <p className="text-sm text-red-600">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className="flex-1 rounded-md border-none bg-white px-4 py-2 font-normal shadow-sm ring-1 shadow-neutral-300/30 ring-neutral-200 outline-none placeholder:text-neutral-400"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-sm text-red-600">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="contact">
                Contact <span className="text-neutral-400">(optional)</span>
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="1234567890"
                className="flex-1 rounded-md border-none bg-white px-4 py-2 font-normal shadow-sm ring-1 shadow-neutral-300/30 ring-neutral-200 outline-none placeholder:text-neutral-400"
                {...register("contact")}
              />
              <p className="text-sm text-red-600">{errors.contact?.message}</p>
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="message">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message(max-100)"
                className="flex-1 resize-none rounded-md border-none bg-white px-4 py-2 font-normal shadow-sm ring-1 shadow-neutral-300/30 ring-neutral-200 outline-none placeholder:text-neutral-400"
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 100,
                    message: "Maximum 100 characters allowed",
                  },
                })}
                rows={5}
              ></textarea>
              <p className="text-sm text-red-600">{errors.message?.message}</p>
            </div>

            <button
              disabled={isSubmitting}
              className="duraation-200 mt-10 flex w-full items-center justify-center gap-3 rounded-md bg-neutral-900 px-4 py-2 text-xl font-semibold tracking-tight text-neutral-100 shadow-lg shadow-neutral-400/40 transition-colors text-shadow-sm hover:bg-neutral-800"
              type="submit"
            >
              Submit
            </button>
          </form>
          {submitMessage && (
            <p className="mt-8 text-center text-[16px] font-semibold tracking-tight text-neutral-700">
              {submitMessage}
            </p>
          )}
        </div>
      </Main>
    </Container>
  );
}
