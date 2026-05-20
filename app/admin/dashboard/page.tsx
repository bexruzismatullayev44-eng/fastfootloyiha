"use client";

import Link from "next/link";
import { useCallback, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h1 className="text-2xl font-semibold">Admin ruxsati yo'q</h1>
      <p className="mt-2 text-slate-500">
        Iltimos admin sahifasiga kirib, keyin dashboardni oching.
      </p>
      <Link href="/admin">
        <button className="mt-6 rounded-3xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600">
          Admin sahifaga qaytish
        </button>
      </Link>
    </div>
  );

  return (
    <div className="space-y-8">
      <Toaster position="top-center" />
      <section className="rounded-3xl bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="text-sm text-slate-500">
              Bu yerda pizza catalogni ko'rish, qo'shish va o'chirish mumkin.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-2 text-sm text-slate-600"></div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr]">
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-lg"></div>
      </div>
    </div>
  );
};

export default page;
