"use client";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import AdminOrders from "@/components/admin/AdminOrders";
const page = () => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h1 className="text-2xl font-semibold">Admin ruxsati yo'q</h1>
      <p className="mt-2 text-slate-500">
        Iltimos admin sahifasiga kirib, buyurtmalarni ko'ring.
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
            <h2 className="text-2xl font-semibold">Buyurtmalar</h2>
            <p className="text-sm text-slate-500">
              Bu yerda kutayotgan buyurtmalarni ko&apos;rish va yetkazilgan deb
              belgilash mumkin.
            </p>
          </div>
          <div className="rounded-3xl bg-orange-100 px-4 py-2 text-sm text-orange-700">
            5 ta kutayotgan
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
