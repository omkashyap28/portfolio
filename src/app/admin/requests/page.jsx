"use client";

import { useState } from "react";
import clsx from "clsx";

const dummyRequests = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@email.com",
    subject: "Freelance Project",
    message: "Hi, I want to build a portfolio website. Are you available?",
    date: "2026-01-28",
    status: "new",
  },
  {
    id: 2,
    name: "Anita Verma",
    email: "anita@email.com",
    subject: "Collaboration",
    message: "Would love to collaborate on a React project.",
    date: "2026-01-27",
    status: "read",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@email.com",
    subject: "Bug in website",
    message: "Your contact form submit button is not working on mobile.",
    date: "2026-01-25",
    status: "replied",
  },
];

export default function RequestsPage() {
  const [requests, setRequests] = useState(dummyRequests);
  const [selected, setSelected] = useState(null);

  function updateStatus(id, status) {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status } : req))
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Contact Requests</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-neutral-100 text-sm uppercase tracking-wide">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>   {/* NEW */}
              <th className="p-4">Subject</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t hover:bg-neutral-50 transition">
                <td className="p-4 font-medium">{req.name}</td>

                {/* NEW EMAIL COLUMN */}
                <td className="p-4 text-sm text-neutral-600">{req.email}</td>

                <td className="p-4">{req.subject}</td>
                <td className="p-4 text-sm text-neutral-500">{req.date}</td>

                <td className="p-4">
                  <span
                    className={clsx(
                      "px-3 py-1 text-xs rounded-full font-medium",
                      {
                        "bg-blue-100 text-blue-700": req.status === "new",
                        "bg-yellow-100 text-yellow-700": req.status === "read",
                        "bg-green-100 text-green-700": req.status === "replied",
                      }
                    )}
                  >
                    {req.status}
                  </span>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => setSelected(req)}
                    className="text-sm text-black underline"
                  >
                    View
                  </button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>

      {/* MESSAGE MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-neutral-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-2">{selected.subject}</h2>
            <p className="text-sm text-neutral-500 mb-1">
              From: {selected.name} ({selected.email})
            </p>
            <p className="text-sm text-neutral-400 mb-4">{selected.date}</p>

            <p className="mb-6 text-neutral-700 leading-relaxed">
              {selected.message}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => updateStatus(selected.id, "read")}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md text-sm"
              >
                Mark as Read
              </button>
              <button
                onClick={() => updateStatus(selected.id, "replied")}
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm"
              >
                Mark as Replied
              </button>
              <a
                href={`mailto:${selected.email}`}
                className="px-4 py-2 bg-black text-white rounded-md text-sm"
              >
                Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
