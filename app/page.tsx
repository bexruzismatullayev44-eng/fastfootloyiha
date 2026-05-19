"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7] px-4 py-6 font-sans text-[#1a1a1a]">
      <Toaster position="top-center" />
      <div className="mx-auto max-w-7xl space-y-3">

        <header className="flex flex-col gap-5 rounded-3xl bg-white border border-[#e8e3dc] p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#e2661a] font-semibold">
              Next Pizza
            </p>
            <h1 className="mt-2 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Pizza buyurtma qilish
            </h1>
            <p className="mt-2 max-w-lg text-sm text-[#888] leading-relaxed">
              Next.js, TypeScript, Zustand, Axios, Tailwind CSS, Shadcn UI va
              React Hot Toast bilan yozilgan pizza do&apos;koni.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="rounded-full bg-[#f5f2ee] border border-[#e8e3dc] px-5 py-2.5 text-sm text-[#666]">
              Savatchada:{" "}

              ta mahsulot
            </div>
            <Link href="/cart">
              <Button className="rounded-full bg-[#e2661a] hover:bg-[#c8541a] text-white border-none px-6">
                Savatchaga o&apos;tish
              </Button>
            </Link>
          </div>
        </header>

        <section className="flex flex-col gap-4 rounded-3xl bg-white border border-[#e8e3dc] p-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">

            </div>
            <select

              className="rounded-full border border-[#e0dbd3] bg-[#f5f2ee] px-5 py-2.5 text-sm text-[#555] outline-none"
            >
              <option value="default">Saralash</option>
              <option value="alphabet">Alifbo bo&apos;yicha</option>
              <option value="popular">Mashhurlik bo&apos;yicha</option>
            </select>
          </div>
 

        </section>

      </div>
    </div>
  )
}

export default page