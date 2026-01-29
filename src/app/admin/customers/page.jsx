"use client";

import { useState } from "react";
import clsx from "clsx";

const dummyCustomers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@email.com",
    project: "Portfolio Website",
    budget: "₹25,000",
    status: "active",
    joined: "2026-01-10",
  },
  {
    id: 2,
    name: "Anita Verma",
    email: "anita@email.com",
    project: "E-commerce Store",
    budget: "₹60,000",
    status: "completed",
    joined: "2025-12-22",
  },
  {
    id: 3,
    name: "Michael Lee",
    email: "michael@email.com",
    project: "SaaS Dashboard UI",
    budget: "₹80,000",
    status: "pending",
    joined: "2026-01-18",
  },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState(dummyCustomers);

  function updateStatus(id, status) {
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Customers</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-neutral-100 text-sm uppercase tracking-wide">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Project</th>
              <th className="p-4">Budget</th>
              <th className="p-4">Status</th>
              <th className="p-4">Joined</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t hover:bg-neutral-50 transition">
                <td className="p-4 font-medium">{c.name}</td>
                <td className="p-4 text-sm text-neutral-600">{c.email}</td>
                <td className="p-4">{c.project}</td>
                <td className="p-4 font-medium">{c.budget}</td>
                <td className="p-4">
                  <span
                    className={clsx(
                      "px-3 py-1 text-xs rounded-full font-medium",
                      {
                        "bg-blue-100 text-blue-700": c.status === "active",
                        "bg-green-100 text-green-700": c.status === "completed",
                        "bg-yellow-100 text-yellow-700": c.status === "pending",
                      }
                    )}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-neutral-500">{c.joined}</td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => updateStatus(c.id, "active")}
                    className="px-3 py-1 text-xs bg-blue-600 text-white rounded"
                  >
                    Active
                  </button>
                  <button
                    onClick={() => updateStatus(c.id, "completed")}
                    className="px-3 py-1 text-xs bg-green-600 text-white rounded"
                  >
                    Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
