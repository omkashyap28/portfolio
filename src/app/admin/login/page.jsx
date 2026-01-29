"use client";

import { useState } from "react";
import { useForm } from "react-hook-form"
import { Container, Heading1, Main } from "../../components";

export default function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: ""
    }
  })

  async function onSubmit(data) {
    setIsSubmitting(true);
    try {

      console.log(data);
      // Simulate form submission
      reset();
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Main>

        <div className="w-full max-w-md mx-auto mt-10">
          <Heading1 heading="Admin" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="space-y-5"
          >
            <div className="flex flex-col justify-start">
              <label htmlFor="username">
                Email <span className="text-red-600">*</span>
              </label>
              <input type="text"
                name="email"
                id="email"
                placeholder="admin@mail.com"
                className="flex-1 px-4 py-2 ring-1 outline-none border-none ring-neutral-200 placeholder:text-neutral-600 font-normal bg-white shadow-sm shadow-neutral-300/30 rounded-md"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className=" mt-1 text-sm text-red-500 font-normal">{errors.username.message}</p>}

            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </label>
              <input type="text"
                name="password"
                id="password"
                placeholder="Password"
                className="flex-1 px-4 py-2 ring-1 outline-none border-none ring-neutral-200 placeholder:text-neutral-600 font-normal bg-white shadow-sm shadow-neutral-300/30 rounded-md"
                {...register("password", { required: "Password is required", minLength: 8 })}
              />
              {errors.password && <p className=" mt-1 text-sm text-red-500 font-normal">{errors.password.message}</p>}
            </div>

            <button
              disabled={isSubmitting}
              className="flex items-center justify-center gap-3 text-neutral-100 w-full px-4 py-2 mt-10 text-xl font-semibold tracking-tight text-shadow-sm bg-neutral-900 hover:bg-neutral-800 transition-colors duraation-200 rounded-md shadow-lg shadow-neutral-400/40"
              type="submit">
              Submit
            </button>
          </form>
        </div>
      </Main>
    </Container>
  )
}