"use client";

import { redirect } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";

export default function AddProject() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      projectUrl: "",
      githubUrl: "",
      tags: [{ value: "" }],
      tools: [{ value: "" }],
    },
  });

  // Dynamic fields for tags
  const { fields: tagFields, append: addTag, remove: removeTag } =
    useFieldArray({ control, name: "tags" });

  // Dynamic fields for tools
  const { fields: toolFields, append: addTool, remove: removeTool } =
    useFieldArray({ control, name: "tools" });

  function onSubmit(data) {
    const formattedData = {
      ...data,
      tags: data.tags.map((t) => t.value).filter(Boolean),
      tools: data.tools.map((t) => t.value).filter(Boolean),
    };

    console.log(formattedData);
    reset();
    redirect("/admin");
  }

  return (
    <div className="max-w-full mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Project Title"
            className="w-full px-4 py-2 ring-1 ring-neutral-300 rounded-md outline-none focus:ring-2 focus:ring-black"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <textarea
            placeholder="Project Description"
            rows={4}
            className="w-full px-4 py-2 ring-1 ring-neutral-300 rounded-md outline-none focus:ring-2 focus:ring-black"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <input
            type="file"
            placeholder="Image URL"
            className="w-full px-4 py-2 ring-1 ring-neutral-300 rounded-md outline-none focus:ring-2 focus:ring-black"
            {...register("imageUrl", { required: "Image URL is required" })}
          />
          {errors.imageUrl && (
            <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
          )}
        </div>

        {/* Project URL */}
        <div>
          <input
            type="url"
            placeholder="Live Project URL"
            className="w-full px-4 py-2 ring-1 ring-neutral-300 rounded-md outline-none focus:ring-2 focus:ring-black"
            {...register("projectUrl")}
          />
        </div>

        {/* GitHub URL */}
        <div>
          <input
            type="url"
            placeholder="GitHub Repository URL"
            className="w-full px-4 py-2 ring-1 ring-neutral-300 rounded-md outline-none focus:ring-2 focus:ring-black"
            {...register("githubUrl", { required: "GitHub URL is required" })}
          />
          <p className="text-red-500 text-sm">{errors.githubUrl?.message}</p>
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium">Tags</label>
          {tagFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mt-2">
              <input
                className="w-full px-4 py-2 ring-1 ring-neutral-300 rounded-md outline-none focus:ring-2 focus:ring-black"
                placeholder="Tag (e.g. frontend)"
                {...register(`tags.${index}.value`, { required: "Tag is required" })}
              />
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addTag({ value: "" })}
            className="mt-2 text-sm text-blue-600"
          >
            + Add Tag
          </button>
        </div>

        {/* Tools */}
        <div>
          <label className="font-medium">Tools Used</label>
          {toolFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mt-2">
              <input
                className="w-full px-4 py-2 ring-1 ring-neutral-300 rounded-md outline-none focus:ring-2 focus:ring-black flex-1"
                placeholder="Tool (e.g. Next.js)"
                {...register(`tools.${index}.value`, { required: "Tool is required" })}
              />
              <button
                type="button"
                onClick={() => removeTool(index)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addTool({ value: "" })}
            className="mt-2 text-sm text-blue-600"
          >
            + Add Tool
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 transition"
        >
          Save Project
        </button>
      </form>
    </div>
  );
}
