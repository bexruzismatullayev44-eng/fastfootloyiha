"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Pizza } from "@/types/pizza";
import usePizzaCardStore from "@/store/pizzaCardStore";

interface PizzaCardProps {
  pizza: Pizza;
  onAddToCart: (pizza: Pizza, size: number, price: number) => void;
}

const calculatePrice = (basePrice: number, size: number) => {
  if (size === 30) return Math.round(basePrice * 1.2);
  if (size === 40) return Math.round(basePrice * 1.4);
  return basePrice;
};

export default function PizzaCard({ pizza, onAddToCart }: PizzaCardProps) {
  const selectedSize = usePizzaCardStore((state) =>
    state.getSelectedSize(pizza.id, pizza.sizes[0]),
  );
  const setSelectedSize = usePizzaCardStore((state) => state.setSelectedSize);

  const selectedPrice = useMemo(
    () => calculatePrice(pizza.price, selectedSize),
    [pizza.price, selectedSize],
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <Image
        src={pizza.imageUrl}
        alt={pizza.name}
        width={400}
        height={220}
        className="h-48 w-full object-cover"
        loading="eager"
      />
      <div className="space-y-3 p-4">
        <div>
          <h2 className="font-medium text-slate-900">{pizza.name}</h2>
          <p className="mt-0.5 text-xs text-slate-400">
            {pizza.types.join(", ")}
          </p>
        </div>

        <div className="flex gap-1">
          {pizza.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(pizza.id, size)}
              className={`flex-1 rounded-lg py-1.5 text-xs transition ${
                selectedSize === size
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {size} sm
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-900">
            {selectedPrice} ₽
          </span>
          <button
            onClick={() => onAddToCart(pizza, selectedSize, selectedPrice)}
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs text-white hover:bg-slate-700 transition"
          >
            Savatga
          </button>
        </div>
      </div>
    </article>
  );
}
