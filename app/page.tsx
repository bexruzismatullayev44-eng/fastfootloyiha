"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import PizzaList from "@/components/PizzaList";
import useStore from "@/store/useStore";
import useAppStore from "@/store/appStore";
import { Pizza } from "@/types/pizza";
import { getPizzas } from "@/lib/pizza";

const categories = [
  "Barchasi",
  "Go'shtli",
  "Vegetarian",
  "Grill",
  "Achchiq",
  "Yopiq",
];

export default function HomePage() {
  const pizzas = useAppStore((state) => state.pizzas);
  const selectedCategory = useAppStore((state) => state.selectedCategory);
  const sortType = useAppStore((state) => state.sortType);
  const isLoading = useAppStore((state) => state.isLoading);
  const setPizzas = useAppStore((state) => state.setPizzas);
  const setSelectedCategory = useAppStore((state) => state.setSelectedCategory);
  const setSortType = useAppStore((state) => state.setSortType);
  const setIsLoading = useAppStore((state) => state.setIsLoading);

  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    const loadPizzas = async () => {
      setIsLoading(true);
      try {
        const data = await getPizzas();
        setPizzas(data);
      } catch {
        toast.error("Pizza ma'lumotlarini yuklab bo'lmadi");
      } finally {
        setIsLoading(false);
      }
    };

    loadPizzas();
  }, [setPizzas, setIsLoading]);

  const filteredPizzas = useMemo(() => {
    return selectedCategory === 0
      ? pizzas
      : pizzas.filter((pizza) =>
          pizza.types.includes(categories[selectedCategory]),
        );
  }, [pizzas, selectedCategory]);

  const sortedPizzas = useMemo(() => {
    const list = [...filteredPizzas];
    if (sortType === "alphabet") {
      return list.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortType === "popular") {
      return list.sort((a, b) => b.sold - a.sold);
    }
    return list;
  }, [filteredPizzas, sortType]);

  const handleAddToCart = (pizza: Pizza, size: number, price: number) => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      imageUrl: pizza.imageUrl,
      size,
      price,
      quantity: 1,
      types: pizza.types,
    });
    toast.success(`${pizza.name} savatchaga qo'shildi!`);
  };

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
              <span className="font-semibold text-[#1a1a1a]">
                {cart.length}
              </span>{" "}
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
              {categories.map((category, index) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(index)}
                  className={`rounded-full text-sm font-medium px-5 py-2 border transition-all ${
                    selectedCategory === index
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a] hover:bg-[#333]"
                      : "bg-transparent text-[#888] border-[#e0dbd3] hover:border-[#aaa] hover:text-[#1a1a1a] hover:bg-transparent"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <select
              value={sortType}
              onChange={(event) => setSortType(event.target.value)}
              className="rounded-full border border-[#e0dbd3] bg-[#f5f2ee] px-5 py-2.5 text-sm text-[#555] outline-none"
            >
              <option value="default">Saralash</option>
              <option value="alphabet">Alifbo bo&apos;yicha</option>
              <option value="popular">Mashhurlik bo&apos;yicha</option>
            </select>
          </div>

          {isLoading ? (
            <div className="rounded-2xl border border-[#e8e3dc] p-10 text-center text-[#bbb] text-sm">
              Yuklanmoqda...
            </div>
          ) : (
            <PizzaList pizzas={sortedPizzas} onAddToCart={handleAddToCart} />
          )}
        </section>
      </div>
    </div>
  );
}
