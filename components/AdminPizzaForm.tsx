"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import usePizzaFormStore from "@/store/pizzaFormStore";
import { Pizza } from "@/types/pizza";

interface AdminPizzaFormProps {
  onCreate: (data: {
    name: string;
    price: number;
    imageUrl: string;
    types: string[];
  }) => Promise<void>;
  onUpdate: (data: Partial<Pizza>) => Promise<void>;
  editingPizza: Pizza | null;
  onCancelEdit: () => void;
}

export default function AdminPizzaForm({
  onCreate,
  onUpdate,
  editingPizza,
  onCancelEdit,
}: AdminPizzaFormProps) {
  const name = usePizzaFormStore((state) => state.name);
  const price = usePizzaFormStore((state) => state.price);
  const imageUrl = usePizzaFormStore((state) => state.imageUrl);
  const typeInput = usePizzaFormStore((state) => state.typeInput);
  const isSubmitting = usePizzaFormStore((state) => state.isSubmitting);
  const setName = usePizzaFormStore((state) => state.setName);
  const setPrice = usePizzaFormStore((state) => state.setPrice);
  const setImageUrl = usePizzaFormStore((state) => state.setImageUrl);
  const setTypeInput = usePizzaFormStore((state) => state.setTypeInput);
  const setIsSubmitting = usePizzaFormStore((state) => state.setIsSubmitting);
  const resetForm = usePizzaFormStore((state) => state.resetForm);

  // Edit modeda formni to'ldirish
  useEffect(() => {
    if (editingPizza) {
      setName(editingPizza.name);
      setPrice(String(editingPizza.price));
      setImageUrl(editingPizza.imageUrl);
      setTypeInput(editingPizza.types[0] ?? "Мясные");
    } else {
      resetForm();
    }
  }, [editingPizza]);

  const handleSubmit = async () => {
    if (!name.trim() || !price.trim() || !imageUrl.trim()) return;

    setIsSubmitting(true);
    try {
      if (editingPizza) {
        await onUpdate({
          name: name.trim(),
          price: Number(price),
          imageUrl: imageUrl.trim(),
          types: [typeInput],
        });
      } else {
        await onCreate({
          name: name.trim(),
          price: Number(price),
          imageUrl: imageUrl.trim(),
          types: [typeInput],
        });
      }
      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-semibold">
        {editingPizza ? "Pizzani tahrirlash" : "Yangi pizza qo'shish"}
      </h2>
      <div className="mt-6 space-y-4">
        <label className="block space-y-2 text-sm text-slate-700">
          Pizza nomi
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
            placeholder="Masalan: Sirli"
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          Narxi
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
            placeholder="Masalan: 420"
            type="number"
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          Rasm URL
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
            placeholder="https://..."
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          Turi
          <select
            value={typeInput}
            onChange={(e) => setTypeInput(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
          >
            <option>Go'shtli</option>
            <option>Vegetariancha</option>
            <option>Gril</option>
            <option>Achchiq</option>
            <option>Yopiq</option>
          </select>
        </label>
        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={isSubmitting}
        >
          {editingPizza ? "Saqlash" : "Pizza qo'shish"}
        </Button>
        {editingPizza && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              resetForm();
              onCancelEdit();
            }}
          >
            Bekor qilish
          </Button>
        )}
      </div>
    </div>
  );
}
