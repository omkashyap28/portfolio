"use client";

import { useState } from "react";
import { useForm } from "react-hook-form"
import { Container, Heading1, Main } from "../components";
import clsx from "clsx";

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
      message: ""
    }
  })

  async function onSubmit(data) {
    console.log(data)
    setIsSubmitting(true);
    try {
      console.log(data);
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage("Message sent successfully!");
      reset();
      setTimeout(() => setSubmitMessage(""), 10000);
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Main>

        <div className="w-full max-w-md mx-auto mt-10">
          <Heading1 heading="Contact Me" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 "
          >
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="type">
                Who you are? <span className="text-red-600 text-sm mb-4">*</span>
              </label>
              <select name="type" id="type"
                className={clsx(
                  "flex-1 px-4 py-2 ring-1 outline-none border-none ring-neutral-200 placeholder:text-neutral-600 font-normal bg-white shadow-sm shadow-neutral-300/30 rounded-md",
                  { "ring-2 ring-red-600": errors.type }
                )}
                {...register("type", { required: "This feild is required" })}
              >
                <option value="" disabled selected>Select an option...</option>
                <option value="hr">Hiring Recuitor</option>
                <option value="freelancer">Freelancer</option>
                <option value="colabrator">Colabrator</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input type="text"
                name="name"
                id="name"
                placeholder="Hariom Kashyap"
                className={clsx(
                  "flex-1 px-4 py-2 ring-1 outline-none border-none ring-neutral-200 placeholder:text-neutral-600 font-normal bg-white shadow-sm shadow-neutral-300/30 rounded-md",
                  { "ring-2 ring-red-600": errors.name }
                )}
                {...register("name", { required: "Name is required" })}
              />
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input type="text"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className={clsx(
                  "flex-1 px-4 py-2 ring-1 outline-none border-none ring-neutral-200 placeholder:text-neutral-600 font-normal bg-white shadow-sm shadow-neutral-300/30 rounded-md",
                  { "ring-2 ring-red-600": errors.contact }
                )}
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="contact">
                Contact <span className="text-neutral-400">(optional)</span>
              </label>
              <input type="text"
                name="contact"
                id="contact"
                placeholder="1234567890"
                className={clsx(
                  "flex-1 px-4 py-2 ring-1 outline-none border-none ring-neutral-200 placeholder:text-neutral-600 font-normal bg-white shadow-sm shadow-neutral-300/30 rounded-md",
                  { "ring-2 ring-red-600": errors.contact }
                )}
                {...register("contact")}
              />
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="message">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message(max-100)"
                className={clsx(
                  "flex-1 px-4 py-2 ring-1 outline-none border-none ring-neutral-200 placeholder:text-neutral-600 font-normal bg-white shadow-sm shadow-neutral-300/30 rounded-md resize-none",
                  { "ring-2 ring-red-600": errors.message }
                )}
                {...register("message", { required: "Message is required", maxLength: 100 })}
                rows={5}
              ></textarea>
            </div>

            <button
              disabled={isSubmitting}
              className="flex items-center justify-center gap-3 text-neutral-100 w-full px-4 py-2 mt-10 text-xl font-semibold tracking-tight text-shadow-sm bg-neutral-900 hover:bg-neutral-800 transition-colors duraation-200 rounded-md shadow-lg shadow-neutral-400/40"
              type="submit">
              Submit
            </button>
          </form>
          {submitMessage && <p className="text-neutral-700 font-semibold mt-8 text-[16px] tracking-tight text-center">
            I will back to you soon.
          </p>}
        </div>
      </Main>
    </Container>
  )
}