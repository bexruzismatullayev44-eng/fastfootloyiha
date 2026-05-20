
import { Button } from "@/components/ui/button";
const AdminPizzaForm = () => {
  return (
        <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-semibold">Yangi pizza qo&apos;shish</h2>
      <div className="mt-6 space-y-4">
        <label className="block space-y-2 text-sm text-slate-700">
          Pizza nomi
          <input

            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
            placeholder="Masalan: Сырная"
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          Narxi
          <input

            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
            placeholder="Masalan: 420"
            type="number"
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          Rasm URL
          <input

            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
            placeholder="https://..."
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          Turi
          <select

            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-500"
          >
            <option>Мясные</option>
            <option>Вегетарианская</option>
            <option>Гриль</option>
            <option>Острые</option>
            <option>Закрытые</option>
          </select>
        </label>
        <Button
          className="w-full"

        >
          Pizza qo&apos;shish
        </Button>
      </div>
    </div>
  )
}

export default AdminPizzaForm