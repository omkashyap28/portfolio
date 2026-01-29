"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Main } from "../components";
import clsx from "clsx";
import { PowerIcon, OpenIcon, CloseIcon } from "../icons";

export default function Admin({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  return (
    <Main>
      <div className="min-h-screen bg-neutral-50 flex">

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 lg:hidden"
          />
        )}
        <aside
          className={clsx(
            "fixed top-0 left-0 z-999 h-full w-64 bg-white border-r border-neutral-200 flex flex-col transform transition-transform duration-300",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            "lg:translate-x-0 lg:fixed")}
        >
          <div className="px-6 py-5 flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Admin Panel
            </h1>
          </div>

          <nav className="flex-1 px-3 py-6 space-y-1">
            {adminLinks.map(({ title, slug }) => {
              const active = pathname === slug;
              return (
                <Link
                  key={title}
                  href={slug}
                  onClick={() => setSidebarOpen(false)}
                  className={clsx(
                    "block rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                    active
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  )}
                >
                  {title}
                </Link>
              );
            })}
          </nav>

          <div className="p-4">
            <Link
              href="/logout"
              className="flex items-center gap-2 w-full rounded-lg bg-neutral-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              <PowerIcon />
              Logout
            </Link>
          </div>
        </aside>

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col min-h-screen lg:ml-64">

          {/* TOP BAR (Mobile only) */}
          <header className="lg:hidden flex items-center justify-between px-5 py-3">
            <button onClick={() => setSidebarOpen(true)}>
              <OpenIcon />
            </button>
          </header>

          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </Main>
  );
}

const adminLinks = [
  { title: "All Projects", slug: "/admin" },
  { title: "Customers", slug: "/admin/customers" },
  { title: "Requests", slug: "/admin/requests" },
];
